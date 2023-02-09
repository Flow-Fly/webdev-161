# Databases

Yesterday, we saw how we can use external API to provide some data on our own website.

The issue is that maybe we would like to be able to create some data or update some informations, how can we deal with that??

We could write the updates to the file, but this **doesn't scale very well**.
If we have 1 update per second, we can probably save that file each time.
If we have 1000 updates per second, we definitely cannot.

Enter the golden hammer of live-updating data: the **database**:
purpose-built software for long-term data storage with live updating capability.

## CRUD: Create, Read, Update, Delete

The core of any database is the four operations we need to perform:

- Create
- Read
- Update
- Delete

### Create

Starting from an empty collection, we need to _create_ our first record.

This is also known as an _insert_.

Usually in a database, we will insert a new record into a particular named collection.
This helps to organise data for later use.

### Read

Once we have available data, we usually want to see it.
Retrieving data that has already been created from a database is known as _reading_.

This is also known as a _select_.

**Reading isn't easy!**
We have to specify exactly what we're looking for.
We may be searching for many matching data,
or alternatively we may be looking for a single datum by a unique identifier.

### Update

Often, we need to change an existing datum.
We call this _updating_.

Updating is complicated.
It involves _selecting_ the right existing records,
and applying a change.

### Delete

Sometimes, data is no longer useful, necessary, or desired.
Othertimes, we are legally obligated to remove it.

We can _delete_ data from our databases.

This may also be called a _remove_ operation.

Deleting is **frighteningly easy**.
When deleting, we have to be sure we're deleting the correct data.
It is very easy to delete all the records in a collection accidentally.

The hard part is **deleting the right thing** – we need to be even more vigilant than when reading.
It's advisable to use a unique identifier to find records when deleting.
