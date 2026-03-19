---
title: "Filter | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/filter.html"
---

# Filter Expressions


## Common filter syntax and operators

The filter syntax resembles the structure of an extended search form in DOCUMENTS' web frontend.
A simple filter expression consists of a field name followed by an operator and a value expression.
Multiple filter expressions can be linked with "AND" (in capital letters) or with "OR".
The following table lists the available operators.

| Operator | Meaning | Comments |
| --- | --- | --- |
| = | equal |  |
| <> | not equal |  |
| != | not equal | alternative spelling |
| < | less than | only allowed for dates, timestamps and numeric fields; in archives only supported by EE.x |
| > | greater than | only allowed for dates, timestamps and numeric fields; in archives only supported by EE.x |
| <= | less than or equal | only allowed for dates, timestamps and numeric fields; usage with EE.i is restricted |
| >= | greater than or equal | only allowed for dates, timestamps and numeric fields; usage with EE.i is restricted |
| |~ | begins with |  |
| ~ | web retrieval operator (called "contains") | The exact behavior of this operator depends on the applied search method. Only for line-indexed fields the search method will be ignored (exact search). |
| >~ | has text line | New in DOCUMENTS 5.0e. Not applicable to archive requests with one exception: allowed for line-indexed fields in EDA requests since DOCUMENTS 5.0i HF1. |

The value expression of a filter represents a single constant value in most cases. If the expression contains a whitespace character or any of the
characters used for comparison operators, it has to be enclosed in either 'single' or "double" quotation marks. If a script dynamically creates such an
expression, it should always place these marks. If the value contains single marks by itself, double marks should be around it and vice versa.
To simplify work, developers may use the function util.getQuoted() to fulfill this requirement.

**Note:** The behaviour of some operators in the table also depends on the type of index used. DOCUMENTS traditionally uses
a primary index for fields. A fulltext option is available since Version 5.0. Starting with 5.0e a line index can be created in place of the fulltext index
(with a limit of 255 Characters per line).
The DOCUMENTS archive (EAS/EDA) generally uses fulltext indexing.
Only certain fields (references for example) become indexed in a "keyword" style, which is like a primary index. Since DOCUMENTS 5 the default indexing
of double lists in the archive is line-indexing.

EASY ENTERPRISE.i constantly uses a fulltext index. ENTERPRISE.x supports primary and fulltext indexing.


## Operators within a field value expression

Exclusively in conjunction with the operators "~" and ">~" a value expression can be composed with a different set
of operators.

| Operator | Meaning | Comments |
| --- | --- | --- |
| & | logical AND |  |
| | | logical OR |  |
| <space character> | logical AND/OR | configurable by "documents.ini"; AND is the default |
| ! | logical NOT |  |
| * | wildcard | Placeholder for any character sequence. Example: the pattern h*y retrieves words like hey or hurry in a fulltext index. In a primary index, the same pattern matches the value "Hello dolly", but not "Hey doc", because the complete text is checked instead of single words. |
| '<word-sequence>' or "<word-sequence>" | phrase query | Finds a sequence of words. If you use this, please do not forget to enclose the whole value expression in quotation marks of the other type. |

**Note:** The operator "&" binds stronger than "|" does. Brackets are not allowed. Use the distributive law to eliminate them.


## The preconfigured search method and how to override it

Another special feature of the web retrieval operator "~" is to place wilcards around search terms automatically.
The intention of this feature is to make searching more comfortable for the user.
A query for a company "peachit", for example, would not find a "peachit corporation" in a primary index.
A query `peachit*` would find it, but end users don't like to worry about different index types and to append
wildcards every time.
The DOCUMENTS setting, which controls automatic wildcard placement, is called *search method*.
Different settings exist for internal queries on one hand, and for archive queries on the other.
DOCUMENTS knows three search methods. (The additional methods of the internal search engine are of minor interest for scripting)

| Method number | Wildcard pattern |
| --- | --- |
| 0 | *term* |
| 1 | term |
| 2 (default) | term* |

By the rule DOCUMENTS places wildcards only, when a primary index is being addressed.
An exception are queries sent to the DOCUMENTS archive (EAS/EDA). In these queries
the actual server applies wildcards to all one-word search terms.

To make scripts independent of the software settings, [Archive]FileResultsets can be created with an override of the search method.
The constructors of these classes have not got an explicit parameter "searchMethod" for compatibility reasons.
The search method can be passed as a special prefix within the filter expression instead: `SETMETHOD()`.


## Date values, numeric values and range queries

DOCUMENTS' retrieval system expects numbers and date values to be formatted in the user's locale format.
The following functions may help to obtain values in the local format.

- Util.convertDateToString
- Context.convertNumericToString
- Context.getAutoText
- DocFile.getAutoText

Starting with Version 4.0d dates and numbers can also be passed with a fixed format.
The format pattern for dates is "@yyyymmdd", where each "y" represents a digit of the year number,
each "m" a digit of rhe month and each "d" a digit of the day in month.
Timestamps can equivalently be formatted as "@yyyymmddHHMMSS" (HH = hours, MM = minutes, SS = seconds).
The fixed format pattern for numbers is either "@sn" or "@sn.n", where "s" is the placeholder for
an optional sign (+/-) and each "n" represents a sequence of one or more decimal digits.

The retrieval services of supported archive systems do not necessarily provide relational operators like ">", or "<=".
ENTREPRISE.i and EDA accept only range queries with a minimum and a maximum value.
To make DOCUMENTS create a proper range query, the passed filter expression needs to contain
two subsequent conditions for the same field. The first one specifies the minimum value (or the earliest date) using the operator ">=".
The second one is reserved for the maximum value (respectively the latest date) behind a "<=".
Violations of this rule may result in unprocessible queries or inefficient queries.


## Examples

See also [[Portalscript API/documents/filter-examples|Filter Examples]]


## Reserved names in a filter expression

Beside those fields, which are declared in a filetype or an archive structure, some docFile attributes
may also be included in a filter expression. Even a fulltext search is possible.
The following table lists identifiers, which may be used instead of the name of a conventional field.

| Identifier | Attribute or option | Remarks |
| --- | --- | --- |
| DlcFile_Title | The docFile's title |  |
| Search_DateFrom | Date of creation |  |
| Search_DateUntil | Date of creation | Equivalent to Search_DateFrom. The double naming only helps to distinguish two input fields in the web-frontend. |
| Search_ModDateFrom | Date of last modification |  |
| Search_ModDateUntil | Date of last modification | Equivalent to Search_ModDateFrom. The double naming only helps to distinguish two input fields in the web-frontend. |
| Search_Owner | The creator or the actual owner of a docFile |  |
| Search_LastEditor | The last editor of a docFile | Non-interactive changes may set this attribute, too. An example is a script, which calls startEdit() and commit(). |
| Search_Fulltext | Performs a fulltext search (fields and attachments). | The only allowed operator is the web-retrieval operator ("~"). Applying any other operator may produce unpredictable results. Search_Fulltext is not allowed, when a filter contains "OR"-linked conditions. |
| Search_KeyArchived | The external key of an associated archived file. | Since 5.0g. Useful for testing whether a file has already been archived. This filter is not available during archive retrieval. |
| Search_FileId | "search" a docFile by its id. | Internal feature for extended permission checks. Scripts should prefer the method Context.getFileById() |
| Search_EEIFileNr | ENTERPRISE.i file number | DOCUMENTS uses this to obtain a version list of an EE.i docFile. |
| DlcFile_LifeCycleTimestamp | Life-cycle timestamp | Since DOCUMENTS 6.1 |
| DlcFile_LifeCycleAction | Life-cycle action | Since DOCUMENTS 6.1 |