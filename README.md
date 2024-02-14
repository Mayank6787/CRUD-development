
 CRUD operations are used in persistent storage applications, meaning these applications will keep their data even after the system powers down. These are different from operations on data stored in volatile storage, like Random Access Memory or cache files.

CRUD is extensively used in database applications. This includes Relational Database Management Systems (RDBMS) like Oracle, MySQL, and PostgreSQL. It also includes NoSQL databases like MongoDB, Apache Cassandra, and AWS DynamoDB.

Operations similar to CRUD can be performed on persistent data structures like files. For example, you can create a Microsoft Word document, update it, read it, and even delete it from the file explorer. However, files are not record-oriented (or document-oriented in the case of MongoDB or Couchbase). The CRUD terminology is specifically related to record-oriented operations instead of flat file operations.

CREATE
The CREATE operation adds a new record to a database. In RDBMS, a database table row is referred to as a record, while columns are called attributes or fields. The CREATE operation adds one or more new records with distinct field values in a table.

The same principle applies to NoSQL databases. If the NoSQL database is document-oriented, then a new document (for example, a JSON formatted document with its attributes) is added to the collection, which is the equivalent of an RDBMS table. Similarly, in NoSQL databases like DynamoDB, the CREATE operation adds an item (which is equivalent to a record) to a table.

READ
READ returns records (or documents or items) from a database table (or collection or bucket) based on some search criteria. The READ operation can return all records and some or all fields.

UPDATE
UPDATE is used to modify existing records in the database. For example, this can be the change of address in a customer database or price change in a product database. Similar to READ, UPDATEs can be applied across all records or only a few, based on criteria.

An UPDATE operation can modify and persist changes to a single field or to multiple fields of the record. If multiple fields are to be updated, the database system ensures they are all updated or not at all. Some big data systems don’t implement UPDATE but allow only a timestamped CREATE operation, adding a new version of the row each time.

DELETE
DELETE operations allow the user to remove records from the database. A hard delete removes the record altogether, while a soft delete flags the record but leaves it in place. For example, this is important in payroll where employment records need to be maintained even after an employee has left the company.
