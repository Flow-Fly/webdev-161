import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { v4 as uuid } from 'uuid'
import Title from '../Title/Title'

const ShowMeTheCode = ({ components }) => {
  const [componentsToDisplay, setComponents] = useState([])

  const fetchAllComponents = () => {
    let guard = components
    if (!Array.isArray(guard)) {
      guard = [guard]
    }
    return guard.map((component) => {
      const location = `/components/${component}/${component}.jsx`
      return fetch(location).then((data) => data.text())
    })
  }

  useEffect(() => {
    async function fetchAll() {
      const arrayOfParsedComponents = await Promise.all(fetchAllComponents())
      setComponents(
        arrayOfParsedComponents.map((t) => ({ content: t, id: uuid() }))
      )
    }
    fetchAll()
  }, [])
  return (
    <>
      {componentsToDisplay.map((oneComponent, i) => {
        return (
          <React.Fragment key={oneComponent.id}>
            <Title>
              {Array.isArray(components) ? components[i] : components}
            </Title>
            <SyntaxHighlighter
              language="javascript"
              showLineNumbers
              style={a11yDark}
              customStyle={{
                borderRadius: '1rem',
              }}
            >
              {oneComponent.content}
            </SyntaxHighlighter>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default ShowMeTheCode
