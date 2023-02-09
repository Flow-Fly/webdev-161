# Querying

Databases are great for searching huge datasets.

Unlike JavaScript where we have `.filter()` and the full power of scripting,
querying in a database is limited by what the database software allows.

Fortunately, MongoDB is very open-ended.

We'll be adding examples here.

## Examples

No query. Returns everything.

```
{}
```

String exact match.

```
{ name: 'Donald Duck' }
```

String inclusion match. Uses a regex. Slashes indicate the start and end of the regex search term; `i` indicates case insensitivity.

```
{ name: /donald/i }
```

Matching in a list.

```
{ name: { $in: ['Donald Duck', 'Mickey Mouse'] }}
```

Exact id match, general ObjectId case.

```
{ _id: ObjectId('62fcc033855fd2f153832a7c') }
```

Exact id match if id is a number.

```
{ _id: 450 }
```

Greater than.

```
{ _id: { $gt: 1000 } }
```

Less than.

```
{ _id: { $lt: 451 } }
```

## Connectors

Simple AND on multiple fields.

```
{ films: 'Who Framed Roger Rabbit', name: /duck/i }
```

Using `$and` operator.

```
{
  $and: [
    { films: 'Who Framed Roger Rabbit' },
    { name: /duck/i }
  ]
}
```

Use case for `$and`: using the same field twice in a filter.

```
{
  $and: [{ films: 'Who Framed Roger Rabbit' }, { films: 'Fantasia 2000' }]
}
```

`$or`:

```
{
  $or: [{ name: /duck/i }, { films: 'Who Framed Roger Rabbit'}]
}
```

```
{ $or: [
  { name: {$in: ['Jafar', 'Ursula', 'Scar', 'Maleficent']} },
  { films: 'The Lion King' }
]}
```

## Projections

For converting our data to something more friendly,
we can _project_ to a different format.

We specify a second object, with the fields we want to see set to 1.
We can exclude fields explicitly with 0.

```
{ name: 1, films: 1, _id: 0 }
```

## Further reading

The MongoDB documentation is great at explaining how querying works,
and all the operations.

<ul>
<li class="raw"><a href="https://docs.mongodb.com/v3.2/crud/" target="_blank" rel="noopener noreferrer">Mongo CRUD Documentation</a></li>
<li class="raw"><a href="https://docs.mongodb.com/v3.2/reference/operator/query/#query-selectors" target="_blank" rel="noopener noreferrer">Query selectors in MongoDB</a></li>
<li class="raw"><a href="https://docs.mongodb.com/v3.2/reference/" target="_blank" rel="noopener noreferrer">Reference Operators</a></li>
<li class="raw"><a href="https://docs.mongodb.com/compass/master/query-bar/#querying" target="_blank" rel="noopener noreferrer">Mongo Compass Querying</a></li>
<li class="raw"><a href="https://docs.mongodb.com/manual/reference/operator/query/" target="_blank" rel="noopener noreferrer">Query Operators</a></li>
<li class="raw"><a href="https://docs.mongodb.com/manual/reference/operator/query-array/" target="_blank" rel="noopener noreferrer">Query Operators for Arrays</a></li>
<li class="raw"><a href="https://docs.mongodb.com/manual/reference/operator/query-element/" target="_blank" rel="noopener noreferrer">Query Operators for Elements</a></li>
<li class="raw"><a href="https://docs.mongodb.com/manual/reference/operator/query-comparison/" target="_blank" rel="noopener noreferrer">Query Operators for Comparison</a></li>
</ul>
