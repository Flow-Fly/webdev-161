const runner = require('child_process')
const fs = require('fs')
const path = require('path')
const info = require('./students.json')

const enhanceStudent = (student) => {
  if (student.github && typeof student.github === 'string') {
    student.github = {
      username: student.github,
      link: `https://github.com/${student.github}/`,
    }
  }
  if (
    student.morningSunshine?.date &&
    typeof student.morningSunshine?.date === 'string'
  ) {
    const date = new Date(student.morningSunshine.date)
    student.morningSunshine = { date }
  }
  if (!student.projects) {
    student.projects = []
  }
}
info.forEach(enhanceStudent)

const saveFile = () => {
  const exportFilepath = path.join(__dirname, 'students.json')
  const dump = JSON.stringify(info, null, 2)
  fs.writeFile(exportFilepath, dump, function (err) {
    if (err) {
      return console.log(err)
    }
  })
}

const chooseRandomStudent = (filter) => {
  let choices = getActiveStudents()
  if (filter) {
    choices = choices.filter(filter)
  }
  const groups = {}
  choices.forEach((student) => {
    let lastProject = groups[student.projects.at(-1)]
    if (lastProject) {
      groups[student.projects.at(-1)] = [...lastProject, student]
    } else {
      groups[student.projects.at(-1)] = [student]
    }
  })

  const index = Math.floor(Math.random() * Object.keys(groups).length)
  const selectedGroup = {
    [Object.keys(groups)[index]]: groups[Object.keys(groups)[index]],
  }

  info.forEach((student) => {
    if (student.projects.at(-1) === Object.keys(groups)[index]) {
      student.hasPresented = true
    }
  })

  return selectedGroup
}

const getMorningSunshine = (date) => {
  const today = new Date().setHours(0, 0, 0, 0)

  if (date) {
    const dateArray = date.split(`-`)

    if (dateArray.every((x) => parseInt(x) !== NaN)) {
      dateArray.length === 1
        ? (date = today + 86400000 * date)
        : (date = new Date(`${new Date().getFullYear()}-${date}`))
    }
  }

  if (!date?.valueOf()) {
    date = today
  }

  const sortedStudents = getActiveStudents().filter(
    (x) => x.morningSunshine.date >= date
  )
  sortedStudents.sort((a, b) => a.morningSunshine.date - b.morningSunshine.date)
  return sortedStudents[0]
}

const searchStudents = (searchTerm) => {
  const student = getActiveStudents().find((s) => {
    return s.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return student
}

const githubUrl = (githubRef) => `https://github.com/${githubRef}/`

const format = (student, formatArg) => {
  // e.g. name,project1.github
  if (!formatArg) {
    return student
  }

  if (formatArg === 'table') {
    return [
      student.name.padEnd(15),
      student.projects[0]
        ? githubUrl(`${student.github.username}/${student.projects[0]}`)
        : 'No project found',
      // student.projects && student.projects[0]?.deployment,
    ].join('\t')
  }

  const properties = formatArg.split(',')
  const result = properties.reduce((dict, property) => {
    // e.g. project1.github
    let indices = property.split('.')
    let fromValue = student
    let intoValue = null
    let nextIntoValue = dict
    let index
    for (index of indices) {
      intoValue = nextIntoValue
      if (!intoValue.hasOwnProperty(index)) {
        intoValue[index] = {}
      }
      // drop down a level
      nextIntoValue = intoValue[index]
      fromValue = fromValue[index]
    }
    // At the final step, add
    intoValue[index] = fromValue

    return dict
  }, {})
  return result
}

const help = (mode) => {
  console.log(`Unknown mode: ${mode}`)
}

const viewStudentGithub = (student) => {
  const url = githubUrl(student.github.username)
  runner.exec(`open ${url}`)
}

const viewStudentProject = (student, project = 1) => {
  const githubProjectId = student.projects[project - 1]

  const githubProject = githubProjectId.includes('/')
    ? githubProjectId
    : `${student.github.username}/${githubProjectId}`

  const url = githubUrl(githubProject)
  runner.exec(`open ${url}`)
}

const addProject = (student, project) => {
  if (!project) {
    return
  }
  student.projects.push(project)
}

const suspenseMessages = [
  `Thinking…`,
  `🤔`,
  `Who's it going to be?`,
  `Get excited!`,
  `We're getting ready to choose…`,
  `Consulting with known associates…`,
  `Squaring a circle`,
  `Planning a vacation 🏖`,
  `Adding suspense…`,
  'Opening a wormhole to a parallel universe',
  'Solving the grandfather paradox',
  'Thinking really, really hard',
  'Notifying the Queen',
  `Looking for Navigo, why is it not in my wallet?`,
  `Waiting for a train`,
  `Phoning mum…`,
  `Forgot I was choosing a student!\nSorry!`,
  'Having a nap after lunch',
  'Evolving Pokémon…',
  `Checking local weather…\n🌦 🌦 🌦`,
  `Contacting the FBI`,
  `🥁 🥁 🥁 🥁 🥁`,
  `Almost there…`,
]

const addSuspense = async () => {
  let suspenseRemaining = 100

  while (suspenseRemaining > 0) {
    const reduction = Math.floor(20 * Math.random())
    suspenseRemaining -= reduction
    const message =
      suspenseMessages[Math.floor(Math.random() * suspenseMessages.length)]
    console.log(message)
    await sleep(250 * (2 + Math.floor(3 * Math.random())))
  }
}

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const fisherYatesShuffle = (...array) => {
  let currentIndex = array.length
  let temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (currentIndex > 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const splitIntoGroups = function* (array, maxGroupSize) {
  let index = 0
  const minGroupSize = maxGroupSize - 1

  while (index < array.length) {
    const remaining = array.length - index

    const size =
      (remaining % maxGroupSize === 0) > 0 ? maxGroupSize : minGroupSize
    yield array.slice(index, index + size)
    index += size
  }
}

const getActiveStudents = () => {
  return info.filter((x) => x.status !== 'deferred')
}

const getRandomGroups = (size) => {
  Array.from(
    splitIntoGroups(fisherYatesShuffle(...getActiveStudents()), size)
  ).forEach((group, i) => {
    const names = group.map((s) => s.name)
    console.log(`Group ${i + 1}: ${names.join(', ')}`)
  })
}

const congratulate = (student) => {
  console.log(`CONGRATULATIONS, ${Object.keys(student)[0]}! It's you!`)
}

const evalProperty = (student, property) => {
  try {
    return eval(`const temp = ${JSON.stringify(student)}
    temp${property}`)
  } catch {
    return `Error finding property ${property}`
  }
}

const execute = async () => {
  const args = process.argv.slice(2)
  const flags = args.filter((x) => x.startsWith('--'))
  const mode = args.shift()
  let student, formatArg

  switch (mode) {
    case 'pairs':
      if (!flags.includes('--fast')) {
        await addSuspense()
      }
      getRandomGroups(2)
      break
    case 'groups':
      const groupSize = parseInt(args.shift())
      getRandomGroups(groupSize)
      break
    case 'eval':
      student = chooseRandomStudent()
      const property = args.shift()
      const result = evalProperty(student, property)
      console.log(student, result)
      break
    case 'suspense':
      if (!flags.includes('--fast')) {
        await addSuspense()
      }
      student = chooseRandomStudent((s) => !s.hasPresented)
      congratulate(student)
      break
    case 'random':
      student = chooseRandomStudent()
      formatArg = args.shift()
      console.log(format(student, formatArg))
      break
    case 'search':
      student = searchStudents(args.shift())
      console.log(format(student, args.shift()))
      break
    case 'github':
      student = searchStudents(args.shift())
      viewStudentGithub(student)
      break
    case 'add-project':
      student = searchStudents(args.shift())
      addProject(student, args.shift())
      break
    case 'project':
      student = searchStudents(args.shift())
      viewStudentProject(student, parseInt(args.shift()))
      break
    case 'list':
      {
        const students = getActiveStudents()
        formatArg = args.shift()
        students.forEach((student) => console.log(format(student, formatArg)))
      }
      break
    case 'view':
      student = chooseRandomStudent()
      viewStudentProject(student)
      break
    case 'sunshine':
      student = getMorningSunshine(args[0])
      const formatter = Intl.DateTimeFormat('fr-FR', {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      })
      student
        ? console.log(
            `Next morning sunshine, on ${formatter.format(
              student.morningSunshine.date
            )}: ${student.fullname}!`
          )
        : console.log(`No more morning sunshines :(`)
      break
    case 'lab':
      {
        const students = getActiveStudents()
        const commands = students.map(
          (s) =>
            `gh repo clone ${s.github?.username || '???'}/${
              args[0]
            } ${s.name.toLowerCase()}/${args[0]}`
        )
        commands.forEach((command) => console.log(command))
      }
      break
    default:
      help(mode)
      break
  }
}

execute().then(saveFile)
