[Skip to content](https://cloud.ibm.com/apidocs/watsonx-ai#api-main)

IBM Cloud

- 
- [Catalog](https://cloud.ibm.com/catalog)
- - Manage
  - 

- - 2949531 - Sanicle
  - 
  - 
- - 
  - 
- 
- 
- 
- 
- - 
  - - 
    - 
    - 













## watsonx.ai



## Overview

- [Introduction to IBM watsonx.ai as a Service](https://cloud.ibm.com/apidocs/watsonx-ai#introduction)
- [Endpoint URLs](https://cloud.ibm.com/apidocs/watsonx-ai#endpoint-url)
- [Authentication](https://cloud.ibm.com/apidocs/watsonx-ai#api-authentication)
- [Error handling](https://cloud.ibm.com/apidocs/watsonx-ai#error-handling)
- 

- [Additional headers](https://cloud.ibm.com/apidocs/watsonx-ai#additional-headers)
- [API change log](https://cloud.ibm.com/apidocs/watsonx-ai#api-change-log)
- 

- 

- [Versioning](https://cloud.ibm.com/apidocs/watsonx-ai#api-versioning)
- [Active Version Dates](https://cloud.ibm.com/apidocs/watsonx-ai#active-version-dates)
- [Data References](https://cloud.ibm.com/apidocs/watsonx-ai#datareferences)
- [Activity Tracker events](https://cloud.ibm.com/apidocs/watsonx-ai#activitytrackerevents)

## Methods

[AI Services](https://cloud.ibm.com/apidocs/watsonx-ai#ai-services-create)

[AutoAI RAG](https://cloud.ibm.com/apidocs/watsonx-ai#create-autoai-rags)

[Deployments](https://cloud.ibm.com/apidocs/watsonx-ai#create-deployment)

[Fine Tunings (Beta)](https://cloud.ibm.com/apidocs/watsonx-ai#create-fine-tuning)

[Foundation Model Specs](https://cloud.ibm.com/apidocs/watsonx-ai#list-foundation-model-specs)

[Notebooks](https://cloud.ibm.com/apidocs/watsonx-ai#notebooks-create)

[Notebook Versions](https://cloud.ibm.com/apidocs/watsonx-ai#versions-create)

[Prompts](https://cloud.ibm.com/apidocs/watsonx-ai#post-prompt)

[Prompt Sessions](https://cloud.ibm.com/apidocs/watsonx-ai#post-prompt-session)

[Text Chat](https://cloud.ibm.com/apidocs/watsonx-ai#text-chat)

[Text Embeddings](https://cloud.ibm.com/apidocs/watsonx-ai#text-embeddings)

[Text Extraction](https://cloud.ibm.com/apidocs/watsonx-ai#text-extraction)

[Text Generation](https://cloud.ibm.com/apidocs/watsonx-ai#text-generation)

[Text Rerank](https://cloud.ibm.com/apidocs/watsonx-ai#text-rerank)

[Text Tokenization](https://cloud.ibm.com/apidocs/watsonx-ai#text-tokenization)

[Time Series](https://cloud.ibm.com/apidocs/watsonx-ai#time-series-forecast)

[Trainings](https://cloud.ibm.com/apidocs/watsonx-ai#trainings-create)

[Document Extraction (Beta)](https://cloud.ibm.com/apidocs/watsonx-ai#create-document-extraction)

[Synthetic Data Generation (Beta)](https://cloud.ibm.com/apidocs/watsonx-ai#create-synthetic-data-generation)

[Taxonomy (Beta)](https://cloud.ibm.com/apidocs/watsonx-ai#create-taxonomy)

[Utility Agent Tools (Beta)](https://cloud.ibm.com/apidocs/watsonx-ai#get-utility-agent-tools)

- [Get utility agent tools](https://cloud.ibm.com/apidocs/watsonx-ai#get-utility-agent-tools)
- [Get utility agent tool](https://cloud.ibm.com/apidocs/watsonx-ai#get-utility-agent-tool)
- [Run a utility agent tool](https://cloud.ibm.com/apidocs/watsonx-ai#post-utility-agent-tools-run)
- [Run a utility agent tool](https://cloud.ibm.com/apidocs/watsonx-ai#post-utility-agent-tools-run-by-name)





[IBM Cloud API Docs](https://cloud.ibm.com/docs?tab=api-docs)[watsonx.ai](https://cloud.ibm.com/apidocs/watsonx-ai)



## Introduction to IBM watsonx.ai as a Service

Last updated: 2025-02-17

Using `IBM watsonx.ai as a Service` APIs, you can run text inference, prompt tuning and more on Large Language Models (LLM).

If you are looking for the `IBM watsonx.ai software` APIs, see [here](https://cloud.ibm.com/apidocs/watsonx-ai-cp).

Step-by-step instructions on how to use `IBM watsonx.ai as a Service` can be found [here](https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/get-started-wdp.html?context=wx&audience=wdp).

There is a specialized python library that is available to access [this REST API](https://ibm.github.io/watsonx-ai-python-sdk/).



## Endpoint URLs

The following URL represents the base URLs for the `watsonx.ai` API endpoints. When you call the API, use the URL and add the path for each method to form the complete API endpoint for your requests.

- Dallas: `https://us-south.ml.cloud.ibm.com`
- Frankfurt - `https://eu-de.ml.cloud.ibm.com`
- London - `https://eu-gb.ml.cloud.ibm.com`
- Tokyo - `https://jp-tok.ml.cloud.ibm.com`
- Sydney - `https://au-syd.ml.cloud.ibm.com`
- Toronto - `https://ca-tor.ml.cloud.ibm.com`

Note that for `prompts`, `notebooks` and `agent tools` the base URLs are the following:

- Dallas: `https://api.dataplatform.cloud.ibm.com/wx`
- Frankfurt - `https://api.eu-de.dataplatform.cloud.ibm.com/wx`
- London - `https://api.eu-gb.dataplatform.cloud.ibm.com/wx`
- Tokyo - `https://api.jp-tok.dataplatform.cloud.ibm.com/wx`
- Sydney - `https://api.au-syd.dai.cloud.ibm.com/wx`
- Toronto - `https://api.ca-tor.dai.cloud.ibm.com/wx`

Example request to a Dallas endpoint:

```
curl -H "Authorization: Bearer {token}" -X {request_method} "https://us-south.ml.cloud.ibm.com/{method_endpoint}" 
```





Replace `{request_method}`, and `{method_endpoint}` in this example with the values for your particular API call. See the `Authentication` section below for more details about the bearer `{token}`.



## Authentication

This API uses IBM Cloud Identity and Access Management (IAM) to authenticate requests.

To work with the API, authenticate your application or service by including your IBM Cloud [IAM access token](https://cloud.ibm.com/docs/account?topic=account-iamtoken_from_apikey#iamtoken_from_apikey) in API requests.

IAM authentication. Replace `{token}` and `{url}/{method}` with your service credentials.

```
curl -H "Authorization:Bearer {token}" -X "{url}/{method}" 
```





Authorization: Bearer {token}

For example, if the token is `tzLbqWhyALQawBg5TjRIf5sAznhrKQyvBFFaZbtF60m5` in the service credentials, include the credentials in your call like this:

```
curl -H "Authorization:Bearer tzLbqWhyALQawBg5TjRIf5sAznhrKQyvBFFaZbtF60m5" -X "https://us-south.ml.cloud.ibm.com/ml/v4/models" 
```







## Error handling

This API uses standard HTTP response codes to indicate whether a method completed successfully. A `200` type response indicates success.

| HTTP Code | Description  | Recovery                                                     |
| :-------- | :----------- | :----------------------------------------------------------- |
| `200`     | Success      | The request was successful.                                  |
| `400`     | Bad Request  | The input parameters in the request body are either incomplete, or in the wrong format, or some other input validation failed. Be sure to include all required parameters in your request and check the request body. |
| `401`     | Unauthorized | You are not authorized to make this request. Log in and try again or provide a valid token. See [Authenticating with IAM tokens](https://cloud.ibm.com/docs/watson?topic=watson-iam#iam) for instructions on logging in. If this error persists, contact the account owner to check your permissions. |
| `403`     | Forbidden    | The supplied authentication is not authorized.               |
| `404`     | Not Found    | The requested resource could not be found.                   |

Note that `429` and `503` errors may mean that the model is overloaded or unavailable, check the error description for more details.



### Error response

| Name   | Description                                                  |
| :----- | :----------------------------------------------------------- |
| trace  | An identifier that can be used to trace the request. This can be set using `X-Global-Transaction-Id`. |
| errors | The list of errors.                                          |

#### Errors

| Name      | Description                                                  |
| :-------- | :----------------------------------------------------------- |
| code      | A simple string code that should convey the general sense of the error. |
| message   | The message that describes the error.                        |
| more_info | A reference to a more detailed explanation when available.   |



## Additional headers

Some additional headers might be required to make successful requests to the API. Those additional headers are described below.

An optional transaction ID can be passed to your request, which can be useful for tracking calls through multiple services using one identifier. The header key must be set to `X-Global-Transaction-Id` and the value is anything that you choose.

If there is not a transaction ID that is passed in, then one is generated randomly.



## API change log

In this change log you can learn about the latest changes, improvements, and updates for the `watsonx.ai` API. The change log lists changes that have been made, ordered by the date they were released. Changes to existing API versions are designed to be compatible with existing client applications, if this is not the case then a new version date will be created.



### 14 March 2024

The `watsonx.ai` API is generally available. Use the `watsonx.ai` API to work with foundation models programmatically.



### 18 April 2024

The [/ml/v1/text/embeddings](https://cloud.ibm.com/apidocs/watsonx-ai#text-embeddings) API was added to `watsonx.ai`, this is a non-breaking change and just adds this single API operation.



## Versioning

API requests require a version parameter that takes the date in the format `version=YYYY-MM-DD`. Send the version parameter with every API request.

When the API is changed in a way that is not compatible with previous versions, a new minor version is released. To take advantage of the changes in a new version, change the value of the version parameter to the new date. If you're not ready to update to that version, don't change your version date.



## Active Version Dates

| Version date | Summary of changes                |
| :----------- | :-------------------------------- |
| `2024-03-14` | Publication of the `/ml/v1` APIs. |



## Data References

Accessing data in a remote location (such as a Cloud Object Storage bucket, or an SQL/no-SQL database) requires the use of `connection_asset` or `data_asset` reference types. These reference types are created within a space or a project and are referenced in requests to represent input data and results locations. These types contain two parameter objects, `connection` and `location`, which require different values to be supplied based on the reference type. Using a `data_asset`, requires an `href` to be supplied to the `location` object whereas using a `connection_asset` requires the `connection_id` for the `connection` object and different `location` fields depending on the data source type.

Example `connection_asset` payload:

```json
{
  "training_data_references": [
    {
      "type": "connection_asset",
      "connection": {
        "id": "<connection_guid>"
      },
      "location": {
        "<wdp-properties depending on the type>": "<value depending on the type>"
      }
    }
  ]
}
```

Example `data_asset` payload:

```json
{
  "training_data_references": [
    {
      "type": "data_asset",
      "location": {
        "href": "/v2/assets/<asset_id>?space_id=<space_id>"
      }
    }
  ]
}
```

Example `container` payload:

```json
{
  "training_data_references": [
    {
      "location":{
        "path":"filename_in_project_or_space"
      },
      "type":"container"
    }
  ]
}
```



## Activity Tracker events

You can monitor API activity within your account by using the IBM Cloud Activity Tracker service. Whenever an API method is called, an event is generated that you can then track and audit from within Activity Tracker. The specific event type is listed for each individual method.

# Methods



## Create a new AI service

Create a new AI service with the given payload. A AI service is some code that can be deployed as a deployment.

```
POST /ml/v4/ai_services
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.ai_service.create`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

AIServiceRequest

Payload for creating the AI service. Either `space_id` or `project_id` has to be provided and is mandatory.

**Examples:**



- ##### space_id

  Required*

  string

  The space that contains the resource.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### name

  Required*

  string

  The name of the resource.

  **Example:** `my-resource`

- ##### software_spec

  Required*

  A software specification.

  SoftwareSpecRel

- ##### description

  string

  A description of the resource.

  **Example:** `This is my first resource.`

- ##### tags

  string[]

  A list of tags for this resource.

  **Possible values:** number of items ≤ 64

  **Examples:**

  

- ##### code_type

  string

  The type that allows the deployment service to know how to setup the code during deployment.

  **Allowable values:** [`python`]

- ##### documentation

  The documentation of the AI service request body and response body.

  AIServiceDocumentation

- ##### custom

  User defined properties specified as key-value pairs.

  **Examples:**

  

  object

  - 

  - ##### 

    

- `curl --request POST 'https://{cluster_url}/ml/v4/ai_services?version=2023-10-25' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{  "name": "ai-service-1",  "space_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",  "software_spec": {    "id": "45f12dfe-aa78-5b8d-9f38-0ee223c47309"  },  "documentation": {    "request": {      "application/json": {        "$schema": "http://json-schema.org/draft-07/schema#",        "type": "object",        "properties": {          "query": {            "type": "string"          },          "parameters": {            "properties": {              "max_new_tokens": {                "type": "integer"              },              "top_p": {                "type": "number"              }            },            "required": [              "max_new_tokens",              "top_p"            ]          }        },        "required": [          "query"        ]      },      "application/png": {        "$schema": "http://json-schema.org/draft-07/schema#",        "type": "object",        "properties": {          "image": {            "type": "string",            "format": "binary"          }        },        "required": [          "image"        ]      }    },    "response": {      "application/json": {        "$schema": "http://json-schema.org/draft-07/schema#",        "type": "object",        "properties": {          "query": {            "type": "string"          },          "result": {            "type": "string"          }        },        "required": [          "query",          "result"        ]      },      "application/png": {        "$schema": "http://json-schema.org/draft-07/schema#",        "type": "string",        "format": "binary"      }    }  } }'`

  

  

### Response

#### Response Body

AIServiceResource

The information for a flow.

- ##### metadata

  Always included*

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  Always included*

  The details of the AI service to be created.

  AIServiceEntity

  - 

  - ##### 

    

  - ##### 

    

    ``

  - ##### 

    

  - ##### 

    

    - 

    - ##### 

      

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 201

  AI service created

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- The response with the result.

  `{  "metadata": {    "id": "b53c5118-b1ca-43ef-a597-ef839ff7129f",    "name": "ai-app-1",    "space_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "created_at": "2023-05-02T16:27:51Z"  },  "entity": {    "software_spec": {      "id": "45f12dfe-aa78-5b8d-9f38-0ee223c47309"    },    "documentation": {      "request": {        "application/json": {          "$schema": "http://json-schema.org/draft-07/schema#",          "type": "object",          "properties": {            "query": {              "type": "string"            },            "parameters": {              "properties": {                "max_new_tokens": {                  "type": "integer"                },                "top_p": {                  "type": "number"                }              },              "required": [                "max_new_tokens",                "top_p"              ]            }          },          "required": [            "query"          ]        },        "application/png": {          "$schema": "http://json-schema.org/draft-07/schema#",          "type": "object",          "properties": {            "image": {              "type": "string",              "format": "binary"            }          },          "required": [            "image"          ]        }      },      "response": {        "application/json": {          "$schema": "http://json-schema.org/draft-07/schema#",          "type": "object",          "properties": {            "query": {              "type": "string"            },            "result": {              "type": "string"            }          },          "required": [            "query",            "result"          ]        },        "application/png": {          "$schema": "http://json-schema.org/draft-07/schema#",          "type": "string",          "format": "binary"        }      }    }  } }`

  

  



## Retrieve the AI services

Retrieve the AI services for the specified space or project.

```
GET /ml/v4/ai_services
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.ai_service.list`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### start

  string

  Token required for token-based pagination. This token cannot be determined by end user. It is generated by the service and it is set in the href available in the `next` field.

- ##### limit

  integer

  How many resources should be returned. By default limit is 100. Max limit allowed is 200.

  **Possible values:** 1 ≤ value ≤ 200

  **Default:** `100`

  **Example:** `50`

- ##### tag.value

  string

  Return only the resources with the given tag values, separated by `or` or `and` to support multiple tags.

  **Example:** `tf2.0 or tf2.1`

- ##### search

  string

  Returns only resources that match this search string. The path to the field must be the complete path to the field, and this field must be one of the indexed fields for this resource type. Note that the search string must be URL encoded.

  **Possible values:** length ≥ 1

### Response

#### Response Body

AIServiceResources

A paginated list of AI services.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Possible values:** 1 ≤ value ≤ 200

  **Example:** `10`

- ##### first

  Always included*

  The reference to the first item in the current page.

  PaginationFirst

- ##### total_count

  integer

  The total number of resources. Computed explicitly only when 'total_count=true' query parameter is present. This is in order to avoid performance penalties.

  **Example:** `1`

- ##### next

  A reference to the first item of the next page, if any.

  PaginationNext

- ##### resources

  A list of AI services.

  AIServiceResource[]

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  OK

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Retrieve the AI service

Retrieve the AI service with the specified identifier. If `rev` query parameter is provided, `rev=latest` will fetch the latest revision. A call with `rev={revision_number}` will fetch the given revision_number record. Either `space_id` or `project_id` has to be provided and is mandatory.

```
GET /ml/v4/ai_services/{id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.ai_service.read`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  AI service identifier.

  **Example:** `64dc8921-345f-234b-462d-78e41246987f`

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### rev

  string

  The revision number of the resource.

  **Example:** `2`

### Response

#### Response Body

AIServiceResource

The information for a flow.

- ##### metadata

  Always included*

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  Always included*

  The details of the AI service to be created.

  AIServiceEntity

  - 

  - ##### 

    

  - ##### 

    

    ``

  - ##### 

    

  - ##### 

    

    - 

    - ##### 

      

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  OK

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Update the AI service

Update the AI service with the provided patch data. The following fields can be patched:

- `/tags`
- `/name`
- `/description`
- `/custom`

```
PATCH /ml/v4/ai_services/{id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.ai_service.update`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  AI service identifier.

  **Example:** `64dc8921-345f-234b-462d-78e41246987f`

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

#### Request Body

Required*

JsonPatchOperation[]

Input For Patch. This is the patch body which corresponds to the JavaScript Object Notation (JSON) Patch standard (RFC 6902).

- ##### op

  Required*

  string

  The operation to be performed.

  **Allowable values:** [`add`,`remove`,`replace`]

- ##### path

  Required*

  string

  The pointer that identifies the field that is the target of the operation.

- ##### value

  string

  The value to be used within the operation.

### Response

#### Response Body

AIServiceResource

The information for a flow.

- ##### metadata

  Always included*

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  Always included*

  The details of the AI service to be created.

  AIServiceEntity

  - 

  - ##### 

    

  - ##### 

    

    ``

  - ##### 

    

  - ##### 

    

    - 

    - ##### 

      

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  AI service has been patched successfully

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Delete the AI service

Delete the AI service with the specified identifier. This will delete all revisions of this flow as well. For each revision all attachments will also be deleted.

```
DELETE /ml/v4/ai_services/{id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.ai_service.delete`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  AI service identifier.

  **Example:** `64dc8921-345f-234b-462d-78e41246987f`

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

### Response

#### Status Code

- ##### 204

  AI service deleted

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Upload the AI service code

Upload the flow code. AI services expect a zip file that contains the code files that make up the flow.

```
PUT /ml/v4/ai_services/{id}/code
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.ai_service.add`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  AI service identifier.

  **Example:** `64dc8921-345f-234b-462d-78e41246987f`

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

#### Request Body

Required*

application/gzipbinary

A gzip file containing code files.

### Response

#### Response Body

AIServiceContentMetadata

The metadata related to the attachment.

- ##### attachment_id

  Always included*

  string

  The content id for the attachment.

  **Example:** `fd45606f-8098-459c-8961-32b136123fgc`

#### Status Code

- ##### 201

  AI service code uploaded

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Download the AI service code

Download the AI service code. It is possible to download the `code` for a given revision of the `flow`. AI services expect a zip file that contains the code files that make up the flow.

```
GET /ml/v4/ai_services/{id}/code
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.ai_service.read`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  AI service identifier.

  **Example:** `64dc8921-345f-234b-462d-78e41246987f`

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### rev

  string

  The revision number of the resource.

  **Example:** `2`

### Response

#### Response Body

binary

#### Status Code

- ##### 200

  OK.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Create a new AI service revision

Create a new AI service revision. The current metadata and content for `id` will be taken and a new revision created. Either `space_id` or `project_id` has to be provided and is mandatory.

```
POST /ml/v4/ai_services/{id}/revisions
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.ai_service.create`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  AI service identifier.

  **Example:** `64dc8921-345f-234b-462d-78e41246987f`

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

RevisionEntitySpaceProjectRequest

The details for the revision.

**Examples:**



- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### commit_message

  string

  An optional commit message for the revision.

### Response

#### Response Body

AIServiceResource

The information for a flow.

- ##### metadata

  Always included*

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  Always included*

  The details of the AI service to be created.

  AIServiceEntity

  - 

  - ##### 

    

  - ##### 

    

    ``

  - ##### 

    

  - ##### 

    

    - 

    - ##### 

      

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 201

  AI service revision created

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Retrieve the AI service revisions

Retrieve the AI service revisions.

```
GET /ml/v4/ai_services/{id}/revisions
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.ai_service.list`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  AI service identifier.

  **Example:** `64dc8921-345f-234b-462d-78e41246987f`

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### start

  string

  Token required for token-based pagination. This token cannot be determined by end user. It is generated by the service and it is set in the href available in the `next` field.

- ##### limit

  integer

  How many resources should be returned. By default limit is 100. Max limit allowed is 200.

  **Possible values:** 1 ≤ value ≤ 200

  **Default:** `100`

  **Example:** `50`

### Response

#### Response Body

AIServiceResources

A paginated list of AI services.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Possible values:** 1 ≤ value ≤ 200

  **Example:** `10`

- ##### first

  Always included*

  The reference to the first item in the current page.

  PaginationFirst

- ##### total_count

  integer

  The total number of resources. Computed explicitly only when 'total_count=true' query parameter is present. This is in order to avoid performance penalties.

  **Example:** `1`

- ##### next

  A reference to the first item of the next page, if any.

  PaginationNext

- ##### resources

  A list of AI services.

  AIServiceResource[]

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  AI service revisions

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Create a new AutoAI RAG run

Create a new AutoAI RAG that will find the best RAG pattern from the data that is provided in the request.

```
POST /ml/v1/autoai/rags
```





### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

AutoAIRAGRequest

The details of the AutoAI RAG run with the data used to find the best RAG patterns.

- ##### name

  Required*

  string

  The name of the job.

- ##### hardware_spec

  Required*

  A hardware specification.

  HardwareSpec

- ##### input_data_references

  Required*

  A set of input data references.

  **Possible values:** 1 ≤ number of items ≤ 20

  AutoAIDataLocation[]

- ##### test_data_references

  Required*

  A set of test data references.

  **Possible values:** number of items = 1

  AutoAIDataLocation[]

- ##### results_reference

  Required*

  The training results. Normally this is specified as `type=container` (Service) or `type=fs` (Software) which means that it is stored in the space or project.

  **Examples:**

  

  ResultsLocation

  - 

  - ##### 

    

    \````

    ``

  - ##### 

    

    - 

    - ##### 

      

      

  - ##### 

    

  - ##### 

    

- ##### description

  string

  The description of the job.

- ##### tags

  string[]

  A list of tags for this resource.

  **Possible values:** number of items ≤ 64

  **Examples:**

  

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### parameters

  The parameters for an AutoAI RAG run.

  AutoAIRAGParameters

- ##### vector_store_references

  A set of vector store references. Milvus vector database is supported.

  **Possible values:** number of items = 1

  ConnectionAsset[]

- ##### custom

  User defined properties specified as key-value pairs.

  **Examples:**

  

  object

  - 

  - ##### 

    

### Response

#### Response Body

AutoAIRAGResponse

The response of an AutoAI RAG run.

- ##### metadata

  The request fields that are not part of the returned entity.

  AutoAIRAGMetadata

- ##### entity

  The status of an AutoAI RAG run.

  AutoAIRAGResponseEntity

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 201

  Created.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Retrieve the AutoAI RAG runs

Retrieve the list of AutoAI RAG requests for the specified space or project.

This operation does not save the history, any requests that were deleted or purged will not appear in this list.

```
GET /ml/v1/autoai/rags
```





### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### start

  string

  Token required for token-based pagination. This token cannot be determined by end user. It is generated by the service and it is set in the href available in the `next` field.

- ##### limit

  integer

  How many resources should be returned. By default limit is 100. Max limit allowed is 200.

  **Possible values:** 1 ≤ value ≤ 200

  **Default:** `100`

  **Example:** `50`

### Response

#### Response Body

AutoRAGResultResources

A paginated list of training definitions.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Possible values:** 1 ≤ value ≤ 200

  **Example:** `10`

- ##### first

  Always included*

  The reference to the first item in the current page.

  PaginationFirst

- ##### total_count

  integer

  The total number of resources. Computed explicitly only when 'total_count=true' query parameter is present. This is in order to avoid performance penalties.

  **Example:** `1`

- ##### next

  A reference to the first item of the next page, if any.

  PaginationNext

- ##### resources

  A list of training definitions.

  AutoAIRAGResponse[]

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  OK.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Get an AutoAI RAG run

Get the results of an AutoAI RAG run, or details if the job failed.

```
GET /ml/v1/autoai/rags/{id}
```





### Request

#### Path Parameters

- ##### id

  Required*

  string

  The `id` is the identifier that was returned in the `metadata.id` field of the request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

### Response

#### Response Body

AutoAIRAGResponse

The response of an AutoAI RAG run.

- ##### metadata

  The request fields that are not part of the returned entity.

  AutoAIRAGMetadata

- ##### entity

  The status of an AutoAI RAG run.

  AutoAIRAGResponseEntity

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  OK.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "description": "My autoai rag experiment for 2023 financial documents",    "name": "AutoAI RAG"  },  "entity": {    "timestamp": "2023-09-22T02:52:03.324Z",    "hardware_spec": {      "id": "c076e82c-b2a7-4d20-9c0f-1f0c2fdf5a24",      "name": "L"    },    "parameters": {      "constraints": {        "embedding_models": [          "ibm/slate-125m-english-rtrvr"        ],        "foundation_models": [          "meta-llama/llama-3-70b-instruct",          "mistralai/mixtral-8x7b-instruct-v01",          "ibm/granite-13b-chat-v2"        ],        "max_number_of_rag_patterns": 8      },      "optimization": {        "metrics": [          "answer_correctness"        ]      },      "output_logs": true    },    "input_data_references": [      {        "type": "connection_asset",        "connection": {          "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"        },        "location": {          "path": "files/document.pdf"        }      }    ],    "test_data_references": [      {        "type": "connection_asset",        "connection": {          "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"        },        "location": {          "path": "files/qa_document.json"        }      }    ],    "vector_store_references": [      {        "type": "connection_asset",        "connection": {          "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"        }      }    ],    "results_reference": {      "type": "container",      "location": {        "path": "results_autoai",        "training": "results_autoai/6a9362f6-7ea2-4419-8c7d-a7e07432dec5",        "training_status": "results_autoai/6a9362f6-7ea2-4419-8c7d-a7e07432dec5/rag/training-status.json",        "assets_path": "results_autoai/6a9362f6-7ea2-4419-8c7d-a7e07432dec5/rag/assets",        "training_log": "results_autoai/6a9362f6-7ea2-4419-8c7d-a7e07432dec5/rag/training.log"      }    },    "results": [      {        "metrics": {          "test_data": [            {              "metric_name": "answer_correctness",              "mean": 0.51,              "ci_high": 0.68,              "ci_low": 0.43            }          ]        },        "context": {          "rag_pattern": {            "composition_steps": [              "vector_store",              "chunking",              "embeddings",              "retrieval",              "generation"            ],            "location": {              "evaluation_results": "results_autoai/6a9362f6-7ea2-4419-8c7d-a7e07432dec5/rag/assets/Pattern1/evaluation_results.json",              "indexing_notebook": "results_autoai/6a9362f6-7ea2-4419-8c7d-a7e07432dec5/rag/assets/Pattern1/indexing_notebook.ipynb",              "inference_notebook": "results_autoai/6a9362f6-7ea2-4419-8c7d-a7e07432dec5/rag/assets/Pattern1/inference_notebook.ipynb"            },            "name": "Pattern 1",            "settings": {              "vector_store": {                "datasource_type": "milvus",                "index_name": "autoai_rag_1234_iteration_5_index",                "distance_metric": "euclidean",                "operation": "upsert",                "schema": {                  "id": "autoai_rag_1.0.0",                  "name": "AutoAI RAG document schema",                  "type": "struct",                  "fields": [                    {                      "name": "text",                      "description": "text field",                      "type": "string",                      "role": "text"                    },                    {                      "name": "document_id",                      "description": "document name field",                      "type": "string",                      "role": "document_name"                    },                    {                      "name": "start_index",                      "description": "chunk starting token position in the source document",                      "type": "number",                      "role": "start_index"                    },                    {                      "name": "sequence_number",                      "description": "chunk number per document",                      "type": "number",                      "role": "sequence_number"                    },                    {                      "name": "vector",                      "description": "vector embeddings",                      "type": "array",                      "role": "vector_embeddings"                    }                  ]                }              },              "chunking": {                "method": "recursive",                "chunk_size": 256,                "chunk_overlap": 64              },              "embeddings": {                "truncate_strategy": "left",                "truncate_input_tokens": 384,                "model_id": "ibm/slate-125m-english-rtrvr"              },              "retrieval": {                "method": "simple",                "number_of_chunks": 5              },              "generation": {                "model_id": "meta-llama/llama-3-1-70b-instruct",                "prompt_template_text": "Answer the following questions based on provided context:\\n ...",                "context_template_text": "[Document]\n{document}\n[End]",                "word_to_token_ratio": 2.2              }            }          },          "iteration": 1,          "max_combinations": 160        }      }    ],    "status": {      "state": "running",      "step": "vector_store",      "message": {        "level": "info",        "text": "Pipeline 1 of 8 is completed."      },      "running_at": "2023-08-04T13:22:48.000Z"    }  } }`

  

  



## Cancel or delete an AutoAI RAG run

Cancel or delete the specified AutoAI RAG run, once deleted all trace of the run job is gone.

```
DELETE /ml/v1/autoai/rags/{id}
```





### Request

#### Path Parameters

- ##### id

  Required*

  string

  The `id` is the identifier that was returned in the `metadata.id` field of the request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### hard_delete

  boolean

  Set to true in order to also delete the job or request metadata.

### Response

#### Status Code

- ##### 204

  Deleted.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Create a new watsonx.ai deployment

Create a new deployment, currently the only supported type is `online`.

If this is a deployment for a prompt tune then the `asset` object must exist and the `id` must be the `id` of the `model` that was created after the prompt training.

If this is a deployment for a prompt template then the `prompt_template` object should exist and the `id` must be the `id` of the prompt template to be deployed.

```
POST /ml/v4/deployments
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.deployment.create`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

DeploymentResourcePrototype

The deployment request entity.

The following important fields are described for each use case:

1. Prompt template:
   - `base_model_id`: **required**
   - `promt_template.id`: **required**
   - `online`: **required**
   - `hardware_spec`: **forbidden**
   - `hardware_request`: **forbidden**
   - response `deployed_asset_type`: `foundation_model`
2. Prompt tune:
   - `asset.id`: **required**
   - `online`: **required**
   - `hardware_spec`: **forbidden**
   - `hardware_request`: **forbidden**
   - `base_model_id`: **forbidden**
   - response `deployed_asset_type`: `prompt_tune`
3. Custom foundation model:
   - `asset.id`: **required**
   - `online`: **required**
   - `online.parameters.foundation_model`: **optional**
   - `hardware_spec`: **forbidden**
   - `hardware_request`: **required**
   - `base_model_id`: **forbidden**
   - `base_deployment_id`: **forbidden**
   - response `deployed_asset_type`: `custom_foundation_model`
4. Deploy on Demand model:
   - `asset.id`: **required**
   - `online`: **required**
   - `online.parameters.foundation_model`: **forbidden**
   - `hardware_spec`: **forbidden**
   - `hardware_request`: **forbidden**
   - `base_model_id`: **forbidden**
   - `base_deployment_id`: **forbidden**
   - `space_id`: **required**
   - `project_id`: **forbidden**
   - response `deployed_asset_type`: `curated_foundation_model`

**Examples:**









- ##### name

  Required*

  string

  The name of the resource.

  **Possible values:** 1 ≤ length ≤ 250

  **Example:** `my-resource`

- ##### online

  Required*

  Indicates that this is an online deployment. An object has to be specified but can be empty. The `serving_name` can be provided in the `online.parameters`.

  OnlineDeployment

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### description

  string

  A description of the resource.

  **Possible values:** length ≤ 1000

  **Example:** `This is my first resource.`

- ##### tags

  string[]

  A list of tags for this resource.

  **Possible values:** number of items ≤ 64

  **Examples:**

  

- ##### custom

  User defined properties specified as key-value pairs.

  **Examples:**

  

  object

  - 

  - ##### 

    

- ##### prompt_template

  A reference to a resource.

  SimpleRel

- ##### hardware_spec

  A hardware specification.

  HardwareSpec

- ##### hardware_request

  The requested hardware for deployment.

  HardwareRequest

- ##### asset

  A reference to a resource.

  Rel

- ##### base_model_id

  string

  The base model that is required for this deployment if this is for a prompt template or a prompt tune for an IBM foundation model.

  **Example:** `google/flan-t5-xl`

### Response

#### Response Body

DeploymentResource

A deployment resource.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  The definition of the deployment.

  DeploymentEntity

#### Status Code

- ##### 202

  Deployment created.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "name": "text_classification",    "description": "Classification prompt tuned model deployment",    "tags": [      "classification"    ]  },  "entity": {    "asset": {      "id": "4cedab6d-e8e4-4214-b81a-2ddb122db2ab"    },    "online": {},    "deployed_asset_type": "prompt_tune",    "base_model_id": "google/flan-ul2",    "status": {      "state": "ready",      "message": {        "level": "info",        "text": "The deployment is successful"      },      "inference": [        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/6213cf1-252f-424b-b52d-5cdd9814956c/text/generation"        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/6213cf1-252f-424b-b52d-5cdd9814956c/text/generation_stream",          "sse": true        }      ]    }  } }`

  

  

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "name": "text_classification",    "description": "Classification prompt template deployment",    "tags": [      "classification"    ]  },  "entity": {    "prompt_template": {      "id": "4cedab6d-e8e4-4214-b81a-2ddb122db2ab"    },    "online": {},    "deployed_asset_type": "foundation_model",    "base_model_id": "google/flan-t5-xl",    "status": {      "state": "ready",      "message": {        "level": "info",        "text": "The deployment is successful"      },      "inference": [        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/6213cf1-252f-424b-b52d-5cdd9814956c/text/generation"        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/6213cf1-252f-424b-b52d-5cdd9814956c/text/generation_stream",          "sse": true        }      ]    }  } }`

  

  

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "name": "my_tuned_flan"  },  "entity": {    "asset": {      "id": "366c31e9-1a6b-417a-8e25-06178a1514a1"    },    "online": {      "parameters": {        "serving_name": "myflan"      }    },    "deployed_asset_type": "custom_foundation_model",    "base_model_id": "google/flan-t5-xl",    "status": {      "state": "ready",      "message": {        "level": "info",        "text": "The deployment is successful"      },      "inference": [        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/6213cf1-252f-424b-b52d-5cdd9814956c/text/generation"        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/myflan/text/generation",          "uses_serving_name": true        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/6213cf1-252f-424b-b52d-5cdd9814956c/text/generation_stream",          "sse": true        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/myflan/text/generation_stream",          "sse": true,          "uses_serving_name": true        }      ]    }  } }`

  

  

- `{  "metadata": {    "id": "c9240431-8697-42ad-8ab3-1cced97fc6db",    "created_at": "2024-12-12T10:42:52.298Z",    "name": "my_granite_13b_chat_v2",    "space_id": "8ca6eec6-ce39-4285-877b-97a9720cdd03"  },  "entity": {    "asset": {      "id": "38d30589-286c-4b9f-82d5-5006d5fa3bb4"    },    "base_model_id": "ibm/granite-13b-chat-v2-curated",    "deployed_asset_type": "curated_foundation_model",    "hardware_request": {      "num_nodes": 1,      "size": "gpu_s"    },    "online": {      "parameters": {        "serving_name": "granite_13b_chat_v2"      }    },    "status": {      "inference": [        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/curated_test_22/text/generation",          "uses_serving_name": true        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/curated_test_22/text/generation_stream",          "uses_serving_name": true,          "sse": true        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/c9240431-8697-42ad-8ab3-1cced97fc6db/text/generation"        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/c9240431-8697-42ad-8ab3-1cced97fc6db/text/generation_stream",          "sse": true        }      ],      "state": "ready"    }  } }`

  

  



## Retrieve the deployments

Retrieve the list of deployments for the specified space or project.

```
GET /ml/v4/deployments
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.deployment.list`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### serving_name

  string

  Retrieves the deployment, if any, that contains this `serving_name`.

  **Example:** `classification`

- ##### tag.value

  string

  Retrieves only the resources with the given tag value.

- ##### asset_id

  string

  Retrieves only the resources with the given asset_id, asset_id would be the model id.

- ##### prompt_template_id

  string

  Retrieves only the resources with the given prompt_template_id.

- ##### name

  string

  Retrieves only the resources with the given name.

- ##### type

  string

  Retrieves the resources filtered with the given type. There are the deployment types as well as an additional `prompt_template` if the deployment type includes a prompt template.

  The supported deployment types are (see the description for `deployed_asset_type` in the deployment entity):

  1. `prompt_tune` - when a prompt tuned model is deployed.
  2. `foundation_model` - when a prompt template is used on a pre-deployed IBM provided model.
  3. `custom_foundation_model` - when a custom foundation model is deployed.

  These can be combined with the flag `prompt_template` like this:

  1. `type=prompt_tune` - return all prompt tuned model deployments.
  2. `type=prompt_tune and prompt_template` - return all prompt tuned model deployments with a prompt template.
  3. `type=foundation_model` - return all prompt template deployments.
  4. `type=foundation_model and prompt_template` - return all prompt template deployments - this is the same as the previous query because a `foundation_model` can only exist with a prompt template.
  5. `type=prompt_template` - return all deployments with a prompt template.

- ##### state

  string

  Retrieves the resources filtered by state. Allowed values are `initializing`, `updating`, `ready` and `failed`.

- ##### conflict

  boolean

  Returns whether `serving_name` is available for use or not. This query parameter cannot be combined with any other parameter except for `serving_name`.

  **Default:** `false`

### Response

#### Response Body

DeploymentResourceCollection

The deployment resources.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Possible values:** 1 ≤ value ≤ 200

  **Example:** `10`

- ##### first

  Always included*

  The reference to the first item in the current page.

  PaginationFirst

- ##### total_count

  integer

  The total number of resources. Computed explicitly only when 'total_count=true' query parameter is present. This is in order to avoid performance penalties.

  **Example:** `1`

- ##### next

  A reference to the first item of the next page, if any.

  PaginationNext

- ##### resources

  A list of deployment resources.

  DeploymentResource[]

- ##### system

  System details including warnings.

  DeploymentSystem

#### Status Code

- ##### 200

  OK.

- ##### 204

  `serving_name` is available for use. Returned when `serving_name` and `conflict` query parameters are used.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

- ##### 409

  Returned when `serving_name` and `conflict` query parameters are used. The response body will contain the reason.

Example responses

- `{  "limit": 10,  "first": {    "href": "https://us-south.ml.cloud.ibm.com/ml/v4/deployments"  },  "resources": [    {      "metadata": {        "id": "6213cf1-252f-424b-b52d-5cdd9814956c",        "created_at": "2023-05-02T16:27:51Z",        "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",        "name": "text_classification",        "description": "Classification prompt tuned model deployment",        "tags": [          "classification"        ]      },      "entity": {        "asset": {          "id": "4cedab6d-e8e4-4214-b81a-2ddb122db2ab"        },        "deployed_asset_type": "prompt_tune",        "online": {},        "base_model_id": "google/flan-t5-xl",        "status": {          "state": "ready",          "message": {            "level": "info",            "text": "The deployment is successful"          },          "inference": [            {              "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/2cd0bcda-581d-4f04-8028-ec2bc90cc375/text/generation"            },            {              "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/2cd0bcda-581d-4f04-8028-ec2bc90cc375/text/generation_stream",              "sse": true            }          ]        }      }    }  ] }`

  

  



## Retrieve the deployment details

Retrieve the deployment details with the specified identifier.

```
GET /ml/v4/deployments/{deployment_id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.deployment.read`

### Request

#### Path Parameters

- ##### deployment_id

  Required*

  string

  The deployment id.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

### Response

#### Response Body

DeploymentResource

A deployment resource.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  The definition of the deployment.

  DeploymentEntity

#### Status Code

- ##### 200

  Deployment details.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "name": "text_classification",    "description": "Classification prompt tuned model deployment",    "tags": [      "classification"    ]  },  "entity": {    "asset": {      "id": "4cedab6d-e8e4-4214-b81a-2ddb122db2ab"    },    "online": {},    "deployed_asset_type": "prompt_tune",    "base_model_id": "google/flan-ul2",    "status": {      "state": "ready",      "message": {        "level": "info",        "text": "The deployment is successful"      },      "inference": [        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/2cd0bcda-581d-4f04-8028-ec2bc90cc375/text/generation"        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/2cd0bcda-581d-4f04-8028-ec2bc90cc375/text/generation_stream",          "sse": true        }      ]    }  } }`

  

  

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "name": "text_classification",    "description": "Classification prompt template deployment",    "tags": [      "classification"    ]  },  "entity": {    "prompt_template": {      "id": "4cedab6d-e8e4-4214-b81a-2ddb122db2ab"    },    "online": {},    "deployed_asset_type": "foundation_model",    "base_model_id": "google/flan-t5-xl",    "status": {      "state": "ready",      "message": {        "level": "info",        "text": "The deployment is successful"      },      "inference": [        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/2cd0bcda-581d-4f04-8028-ec2bc90cc375/text/generation"        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/2cd0bcda-581d-4f04-8028-ec2bc90cc375/text/generation_stream",          "sse": true        }      ]    }  } }`

  

  

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "name": "my_tuned_flan"  },  "entity": {    "asset": {      "id": "366c31e9-1a6b-417a-8e25-06178a1514a1"    },    "online": {      "parameters": {        "serving_name": "myflan"      }    },    "deployed_asset_type": "custom_foundation_model",    "base_model_id": "google/flan-t5-xl",    "status": {      "state": "ready",      "message": {        "level": "info",        "text": "The deployment is successful"      },      "inference": [        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/6213cf1-252f-424b-b52d-5cdd9814956c/text/generation"        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/myflan/text/generation",          "uses_serving_name": true        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/6213cf1-252f-424b-b52d-5cdd9814956c/text/generation_stream",          "sse": true        },        {          "url": "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/myflan/text/generation_stream",          "sse": true,          "uses_serving_name": true        }      ]    }  } }`

  

  



## Update the deployment metadata

Update the deployment metadata. The following parameters of deployment metadata are supported for the patch operation.

- `/name`
- `/description`
- `/tags`
- `/custom`
- `/online/parameters`
- `/asset` - `replace` only
- `/prompt_template` - `replace` only
- `/hardware_spec`
- `/hardware_request`
- `/base_model_id` - `replace` only (applicable only to prompt template deployments referring to IBM base foundation models)

The PATCH operation with path specified as `/online/parameters` can be used to update the `serving_name`.

```
PATCH /ml/v4/deployments/{deployment_id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.deployment.update`

### Request

#### Path Parameters

- ##### deployment_id

  Required*

  string

  The deployment id.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

#### Request Body

Required*

application/json-patch+jsonJsonPatchOperation[]

The json patch.

- ##### op

  Required*

  string

  The operation to be performed.

  **Allowable values:** [`add`,`remove`,`replace`]

- ##### path

  Required*

  string

  The pointer that identifies the field that is the target of the operation.

- ##### value

  string

  The value to be used within the operation.

### Response

#### Response Body

DeploymentResource

A deployment resource.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  The definition of the deployment.

  DeploymentEntity

#### Status Code

- ##### 202

  Deployment accepted

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Delete the deployment

Delete the deployment with the specified identifier.

```
DELETE /ml/v4/deployments/{deployment_id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.deployment.delete`

### Request

#### Path Parameters

- ##### deployment_id

  Required*

  string

  The deployment id.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

### Response

#### Status Code

- ##### 204

  Deployment deleted.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Infer text

Infer the next tokens for a given deployed model with a set of parameters. If a `serving_name` is used then it must match the `serving_name` that is returned in the `inference` section when the deployment was created.

### Return options

Note that there is currently a limitation in this operation when using `return_options`, for input only `input_text` will be returned if requested, for output the `input_tokens` and `generated_tokens` will not be returned.

```
POST /ml/v1/deployments/{id_or_name}/text/generation
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.foundation-model.send`

### Request

#### Path Parameters

- ##### id_or_name

  Required*

  string

  The `id_or_name` can be either the `deployment_id` that identifies the deployment or a `serving_name` that allows a predefined URL to be used to post a prediction.

  The WML instance that is associated with the deployment will be used for limits and billing (if a paid plan).

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

DeploymentTextGenRequest

From a given prompt, infer the next tokens.

**Examples:**







- ##### input

  string

  The prompt to generate completions. Note: The method tokenizes the input internally. It is recommended not to leave any trailing spaces.

  This field is ignored if there is a prompt template.

- ##### parameters

  The template properties if this request refers to a prompt template.

  **Examples:**

  

  DeploymentTextGenProperties

- ##### moderations

  Properties that control the moderations, for usages such as `Hate and profanity` (HAP) and `Personal identifiable information` (PII) filtering. This list can be extended with new types of moderations.

  **Examples:**

  

  Moderations

  - 

  - ##### 

    

    

- `curl --request POST 'https://{cluster_url}/ml/v1/deployments/{id_or_name}/text/generation?version=2023-05-02' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-raw '{  "input": "how far is paris from bangalore:",  "parameters": {    "max_new_tokens": 100,    "time_limit": 1000  }, }'`

  

  

- 

### Response

#### Response Body

TextGenResponse

System details.

- ##### model_id

  Always included*

  string

  The `id` of the model for inference.

  **Example:** `google/flan-ul2`

- ##### created_at

  Always included*

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### results

  Always included*

  The generated tokens.

  **Possible values:** number of items ≥ 1

  object[]

  - 

  - ##### 

    

    ``

  - ##### 

    

    \````````````````

    ``

  - ##### 

    

    ``

  - ##### 

    

    ``

  - ##### 

    

    ``

  - ##### 

    

    

  - ##### 

    

    

  - ##### 

    

    - 

    - ##### 

      

      

- ##### model_version

  string

  The model version (using semantic versioning) if set.

  **Possible values:** 5 ≤ length ≤ 20, Value must match regular expression `^\d+.\d+.\d+$`

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  Successful operation

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- The generated text from the model along with other details for a prompt tune.

  `{  "model_id": "google/flan-ul2",  "created_at": "2023-07-21T16:52:32.190Z",  "results": [    {      "generated_text": "4,000 km",      "generated_token_count": 4,      "input_token_count": 12,      "stop_reason": "eos_token"    }  ] }`

  

  

- The generated text from the model along with other details for a prompt tune with moderations.

  `{  "model_id": "google/flan-t5-xl",  "created_at": "2023-07-21T16:52:32.190Z",  "results": [    {      "generated_text": "c/o USPS, PO Box 3000, Washington, D.C. 20001-5000, www.usps.com, or call **************. You can also visit the website at https://www.usps.com/contactus/. You can also contact them by telephone at 1-************. You can also send an email to ***************. You can find the US Postal Service on Facebook at https://www.facebook.com/postalservice/.",      "generated_token_count": 118,      "input_token_count": 11,      "stop_reason": "eos_token",      "moderations": {        "pii": [          {            "score": 0.8,            "input": false,            "position": {              "start": 74,              "end": 88            },            "entity": "PhoneNumber"          },          {            "score": 0.8,            "input": false,            "position": {              "start": 200,              "end": 212            },            "entity": "PhoneNumber"          },          {            "score": 0.8,            "input": false,            "position": {              "start": 244,              "end": 259            },            "entity": "EmailAddress"          }        ]      }    }  ] }`

  

  

- The generated text from the model along with other details for a prompt template.

  `{  "model_id": "google/flan-ul2",  "created_at": "2023-07-21T16:52:32.190Z",  "results": [    {      "generated_text": "4,000 km",      "generated_token_count": 4,      "input_token_count": 12,      "stop_reason": "eos_token"    }  ] }`

  

  



## Infer text event stream

Infer the next tokens for a given deployed model with a set of parameters. This operation will return the output tokens as a stream of events. If a `serving_name` is used then it must match the `serving_name` that is returned in the `inference` section when the deployment was created.

### Return options

Note that there is currently a limitation in this operation when using `return_options`, for input only `input_text` will be returned if requested, for output the `input_tokens` and `generated_tokens` will not be returned, also the `rank` and `top_tokens` will not be returned.

```
POST /ml/v1/deployments/{id_or_name}/text/generation_stream
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.foundation-model.send`

### Request

#### Path Parameters

- ##### id_or_name

  Required*

  string

  The `id_or_name` can be either the `deployment_id` that identifies the deployment or a `serving_name` that allows a predefined URL to be used to post a prediction.

  The WML instance that is associated with the deployment will be used for limits and billing (if a paid plan).

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

DeploymentTextGenRequest

From a given prompt, infer the next tokens in a server-sent events (SSE) stream.

**Examples:**



- ##### input

  string

  The prompt to generate completions. Note: The method tokenizes the input internally. It is recommended not to leave any trailing spaces.

  This field is ignored if there is a prompt template.

- ##### parameters

  The template properties if this request refers to a prompt template.

  **Examples:**

  

  DeploymentTextGenProperties

- ##### moderations

  Properties that control the moderations, for usages such as `Hate and profanity` (HAP) and `Personal identifiable information` (PII) filtering. This list can be extended with new types of moderations.

  **Examples:**

  

  Moderations

  - 

  - ##### 

    

    

- `curl --request POST 'https://{cluster_url}/ml/v1/deployments/{id_or_name}/text/generation_stream?version=2023-05-02' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-raw '{  "input": "how far is paris from bangalore:",  "parameters": {    "max_new_tokens": 100,    "time_limit": 1000  }, }'`

  

  

- 

### Response

#### Response Body

TextGenResponse[]

A set of server sent events, each event contains a response for one or more tokens. The results will be an array of events of the form `data: {<json event>}` where the schema of the individual `json event` is described below.

- ##### model_id

  Always included*

  string

  The `id` of the model for inference.

  **Example:** `google/flan-ul2`

- ##### created_at

  Always included*

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### results

  Always included*

  The generated tokens.

  **Possible values:** number of items ≥ 1

  object[]

  - 

  - ##### 

    

    ``

  - ##### 

    

    \````````````````

    ``

  - ##### 

    

    ``

  - ##### 

    

    ``

  - ##### 

    

    ``

  - ##### 

    

    

  - ##### 

    

    

  - ##### 

    

    - 

    - ##### 

      

      

- ##### model_version

  string

  The model version (using semantic versioning) if set.

  **Possible values:** 5 ≤ length ≤ 20, Value must match regular expression `^\d+.\d+.\d+$`

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  Successful operation (`Content-Type: text/event-stream`).

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Infer text chat

Infer the next chat message for a given deployment. The deployment must reference a prompt template which has `input_mode` set to `chat`. The model to the chat request will be from the deployment `base_model_id`. Parameters to the chat request will be from the prompt template `model_parameters`. Related guides: [Deployment](https://cloud.ibm.com/apidocs/watsonx-ai#create-deployment), [Prompt template](https://cloud.ibm.com/apidocs/watsonx-ai#post-prompt), [Text chat](https://cloud.ibm.com/apidocs/watsonx-ai#text-chat).

If a `serving_name` is used then it must match the `serving_name` that is returned in the `inference` section when the deployment was created.

```
POST /ml/v1/deployments/{id_or_name}/text/chat
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.foundation-model.send`

### Request

#### Path Parameters

- ##### id_or_name

  Required*

  string

  The `id_or_name` can be either the `deployment_id` that identifies the deployment or a `serving_name` that allows a predefined URL to be used to post a prediction. The deployment must reference a prompt template with `input_mode` `chat`.

  The WML instance that is associated with the deployment will be used for limits and billing (if a paid plan).

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

DeploymentTextChatRequest

From a given prompt, infer the next chat message.

**Examples:**





- ##### messages

  Required*

  The messages for this chat session. You cannot specify `system` `role` in the messages. Depending on the model, the `content` of `system` `role` may be from `system_prompt` of the prompt template, and will be automatically inserted into `messages`.

  As an example, depending on the model, if `system_prompt` of a prompt template is "You are Granite Chat, an AI language model developed by IBM. You are a cautious assistant. You carefully follow instructions. You are helpful and harmless and you follow ethical guidelines and promote positive behavior.", a message with `system` `role` having `content` the same as `system_prompt` is inserted.

  **Possible values:** 1 ≤ number of items ≤ 1000

  DeploymentTextChatMessages[]

  - 

  - 

    

    

    

- ##### context

  string

  If specified, `context` will be inserted into `messages`. Depending on the model, `context` may be inserted into the `content` with `system` `role`; or into the `content` of the last message of `user` `role`.

  In the example, `context` "Today is Wednesday" is inserted as such `content` of `user` becomes "Today is Wednesday. Who are you and which day is tomorrow?"

### Response

#### Response Body

TextChatResponse

System details.

- ##### id

  Always included*

  string

  A unique identifier for the chat completion.

- ##### model_id

  Always included*

  string

  The model used for the chat completion.

  **Example:** `google/flan-ul2`

- ##### created

  Always included*

  integer

  The Unix timestamp (in seconds) of when the chat completion was created.

- ##### choices

  Always included*

  A list of chat completion choices. Can be more than one if `n` is greater than 1.

  **Possible values:** number of items ≥ 1

  TextChatResultChoice[]

- ##### model_version

  string

  The model version (using semantic versioning) if set.

  **Possible values:** 5 ≤ length ≤ 20, Value must match regular expression `^\d+.\d+.\d+$`

- ##### created_at

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### usage

  Usage statistics for the completion request.

  TextChatUsage

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  Successful operation

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- The generated text from the model along with other details for a prompt template.

  `{  "id": "cmpl-15475d0dea9b4429a55843c77997f8a9",  "model_id": "ibm/granite-3-2b-instruct",  "created": 1689958352,  "created_at": "2023-07-21T16:52:32.190Z",  "choices": [    {      "index": 0,      "message": {        "role": "assistant",        "content": "The 2020 World Series was played at the Globe Life Field in Arlington, Texas.\n"      },      "finish_reason": "stop"    }  ],  "usage": {    "completion_tokens": 27,    "prompt_tokens": 186,    "total_tokens": 213  } }`

  

  

- The generated text from the model along with other details for a prompt template.

  `{  "id": "cmpl-15475d0dea9b4429a55843c77997f8a9",  "model_id": "ibm/granite-3-2b-instruct",  "created": 1689958352,  "created_at": "2023-07-21T16:52:32.190Z",  "choices": [    {      "index": 0,      "message": {        "role": "assistant",        "content": "Hello! I am Granite Chat, created by IBM. I am here to assist you. Today is Wednesday.tomorrow is Thursday.\n"      },      "finish_reason": "stop"    }  ],  "usage": {    "completion_tokens": 32,    "prompt_tokens": 154,    "total_tokens": 186  } }`

  

  



## Infer text chat event stream

Infer the next chat message for a given deployment. This operation will return the output tokens as a stream of events. The deployment must reference a prompt template which has `input_mode` set to `chat`. The model to the chat request will be from the deployment `base_model_id`. Parameters to the chat request will be from the prompt template `model_parameters`. Related guides: [Deployment](https://cloud.ibm.com/apidocs/watsonx-ai#create-deployment), [Prompt template](https://cloud.ibm.com/apidocs/watsonx-ai#post-prompt), [Text chat](https://cloud.ibm.com/apidocs/watsonx-ai#text-chat).

If a `serving_name` is used then it must match the `serving_name` that is returned in the `inference` section when the deployment was created.

```
POST /ml/v1/deployments/{id_or_name}/text/chat_stream
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.foundation-model.send`

### Request

#### Path Parameters

- ##### id_or_name

  Required*

  string

  The `id_or_name` can be either the `deployment_id` that identifies the deployment or a `serving_name` that allows a predefined URL to be used to post a prediction. The deployment must reference a prompt template with `input_mode` `chat`.

  The WML instance that is associated with the deployment will be used for limits and billing (if a paid plan).

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

DeploymentTextChatRequest

From a given prompt, infer the next chat message in a server-sent events (SSE) stream.

**Examples:**





- ##### messages

  Required*

  The messages for this chat session. You cannot specify `system` `role` in the messages. Depending on the model, the `content` of `system` `role` may be from `system_prompt` of the prompt template, and will be automatically inserted into `messages`.

  As an example, depending on the model, if `system_prompt` of a prompt template is "You are Granite Chat, an AI language model developed by IBM. You are a cautious assistant. You carefully follow instructions. You are helpful and harmless and you follow ethical guidelines and promote positive behavior.", a message with `system` `role` having `content` the same as `system_prompt` is inserted.

  **Possible values:** 1 ≤ number of items ≤ 1000

  DeploymentTextChatMessages[]

  - 

  - 

    

    

    

- ##### context

  string

  If specified, `context` will be inserted into `messages`. Depending on the model, `context` may be inserted into the `content` with `system` `role`; or into the `content` of the last message of `user` `role`.

  In the example, `context` "Today is Wednesday" is inserted as such `content` of `user` becomes "Today is Wednesday. Who are you and which day is tomorrow?"

### Response

#### Response Body

TextChatStreamItem[]

A set of server sent events, each event contains a response for one or more tokens. The results will be an array of events of the form `data: {<json event>}` where the schema of the individual `json event` is described below.

- ##### id

  Always included*

  string

  A unique identifier for the chat completion.

- ##### model_id

  Always included*

  string

  The model used for the chat completion.

  **Example:** `google/flan-ul2`

- ##### created

  Always included*

  integer

  The Unix timestamp (in seconds) of when the chat completion was created.

- ##### choices

  Always included*

  A list of chat completion choices. Can be more than one if `n` is greater than 1.

  **Possible values:** number of items ≥ 1

  TextChatResultChoiceStream[]

- ##### model_version

  string

  The model version (using semantic versioning) if set.

  **Possible values:** 5 ≤ length ≤ 20, Value must match regular expression `^\d+.\d+.\d+$`

- ##### created_at

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### usage

  Usage statistics for the completion request.

  TextChatUsage

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  Successful operation (`Content-Type: text/event-stream`).

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Create a fine tuning job

Create a fine tuning job that will fine tune an LLM.

```
POST /ml/v1/fine_tunings
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.fine-tuning.create`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

FineTuningRequest

The details of the fine tuning job with the data used to tune the LLM.

- ##### name

  Required*

  string

  The name of the job.

- ##### training_data_references

  Required*

  The training datasets.

  **Possible values:** 1 ≤ number of items ≤ 20

  ObjectLocation[]

- ##### results_reference

  Required*

  The training results. Normally this is specified as `type=container` which means that it is stored in the space or project.

  **Examples:**

  

  ObjectLocation

  - 

  - ##### 

    

  - ##### 

    

    - 

    - ##### 

      

      

  - ##### 

    

  - ##### 

    

- ##### description

  string

  The description of the job.

- ##### tags

  string[]

  A list of tags for this resource.

  **Possible values:** number of items ≤ 64

  **Examples:**

  

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### auto_update_model

  boolean

  This field must not be set while creating a fine tuning job with InstructLab.

  If set to `true` then the result of the training, if successful, will be uploaded to the repository as a model.

  **Default:** `false`

- ##### parameters

  This field must not be set while creating a fine tuning job with InstructLab.

  The parameters for the job. Note that if `verbalizer` is provided then `response_template` must also be provided (and vice versa).

  FineTuningParameters

- ##### type

  string

  The `type` of Fine Tuning training. The `type` is set to `ilab` for InstructLab training.

  **Allowable values:** [`ilab`]

- ##### test_data_references

  This field must not be set while creating a fine tuning job with InstructLab.

  The holdout/test datasets.

  **Possible values:** 1 ≤ number of items ≤ 20

  ObjectLocation[]

- ##### custom

  User defined properties specified as key-value pairs.

  **Examples:**

  

  object

  - 

  - ##### 

    

- `curl --request POST 'https://{cluster_url}/ml/v1/fine_tunings?version=2023-10-25' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{  "name": "Instruct Lab Fine Tuning",  "project_id": "dc178286-21d1-4262-9000-e543cf4c7742",  "type": "ilab",  "training_data_references": [    {      "type": "data_asset",      "location": {        "id": "4cc2f990-cd83-4e62-bd61-33b21605cf0e",        "href": ""      }    }  ],  "results_reference": {    "type": "container",    "location": {      "path": "."    }  } }' `

  

  

### Response

#### Response Body

FineTuningResource

The response of a fine tuning job.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

  - 

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

    

  - ##### 

    

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

- ##### entity

  Status of the training job.

  FineTuningEntity

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 201

  Created.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Retrieve the list of fine tuning jobs

Retrieve the list of fine tuning jobs for the specified space or project.

```
GET /ml/v1/fine_tunings
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.fine-tuning.list`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### start

  string

  Token required for token-based pagination. This token cannot be determined by end user. It is generated by the service and it is set in the href available in the `next` field.

- ##### limit

  integer

  How many resources should be returned.

  **Possible values:** value ≤ 200

  **Default:** `100`

- ##### total_count

  boolean

  Compute the total count. May have performance impact.

- ##### tag.value

  string

  Return only the resources with the given tag value.

- ##### state

  string

  Filter based on on the job state: queued, running, completed, failed etc.

- ##### type

  string

  The `type` of Fine Tuning training. The `type` is set to `ilab` for InstructLab training.

  **Allowable values:** [`ilab`]

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

### Response

#### Response Body

FineTuningResources

System details.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Possible values:** 1 ≤ value ≤ 200

  **Example:** `10`

- ##### first

  Always included*

  The reference to the first item in the current page.

  PaginationFirst

- ##### total_count

  integer

  The total number of resources. Computed explicitly only when 'total_count=true' query parameter is present. This is in order to avoid performance penalties.

  **Example:** `1`

- ##### next

  A reference to the first item of the next page, if any.

  PaginationNext

- ##### resources

  The response of a fine tuning job.

  FineTuningResource[]

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  OK.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Get a fine tuning job

Get the results of a fine tuning job, or details if the job failed.

```
GET /ml/v1/fine_tunings/{id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.fine-tuning.get`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  The `id` is the identifier that was returned in the `metadata.id` field of the request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

### Response

#### Response Body

FineTuningResource

The response of a fine tuning job.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

  - 

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

    

  - ##### 

    

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

- ##### entity

  Status of the training job.

  FineTuningEntity

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  OK.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Cancel or delete a fine tuning job

Delete a fine tuning job if it exists, once deleted all trace of the job is gone.

```
DELETE /ml/v1/fine_tunings/{id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.fine-tuning.delete`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  The `id` is the identifier that was returned in the `metadata.id` field of the request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### hard_delete

  boolean

  Set to true in order to also delete the job or request metadata.

### Response

#### Status Code

- ##### 204

  Deleted.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## List the available foundation models

Retrieve the list of deployed foundation models.

```
GET /ml/v1/foundation_model_specs
```





### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### start

  string

  Token required for token-based pagination. This token cannot be determined by end user. It is generated by the service and it is set in the href available in the `next` field.

- ##### limit

  integer

  How many resources should be returned. By default limit is 100. Max limit allowed is 200.

  **Possible values:** 1 ≤ value ≤ 200

  **Default:** `100`

  **Example:** `50`

- ##### filters

  string

  A set of filters to specify the list of models, filters are described as the `pattern` shown below.

  ```text
   pattern: tfilter[,tfilter][:(or|and)]
   tfilter: filter | !filter
     filter: Requires existence of the filter.
     !filter: Requires absence of the filter.
   filter: one of
     modelid_*:     Filters by model id.
                    Namely, select a model with a specific model id.
     provider_*:    Filters by provider.
                    Namely, select all models with a specific provider.
     source_*:      Filters by source.
                    Namely, select all models with a specific source.
     input_tier_*:  Filters by input tier.
                    Namely, select all models with a specific input tier.
     output_tier_*: Filters by output tier.
                    Namely, select all models with a specific output tier.
     tier_*:        Filters by tier.
                    Namely, select all models with a specific input or output tier.
     task_*:        Filters by task id.
                    Namely, select all models that support a specific task id.
     lifecycle_*:   Filters by lifecycle state.
                    Namely, select all models that are currently in the specified lifecycle state.
     function_*:    Filters by function. 
                    Namely, select all models that support a specific function.
  ```

  **Possible values:** 1 ≤ length ≤ 1000, Value must match regular expression `^([!]?[^,!]+)(,[!]?[^,!]+)*(:(or|and))?$`

  **Example:** `modelid_ibm/granite-13b-instruct-v1,modelid_ibm/granite-13b-instruct-v2:or`

- ##### tech_preview

  boolean

  See all the `Tech Preview` models if entitled.

  **Default:** `false`

### Response

#### Response Body

FoundationModels

System details.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Possible values:** 1 ≤ value ≤ 200

  **Example:** `10`

- ##### first

  Always included*

  The reference to the first item in the current page.

  PaginationFirst

- ##### total_count

  integer

  The total number of resources.

  **Example:** `1`

- ##### next

  A reference to the first item of the next page, if any.

  PaginationNext

- ##### resources

  The supported foundation models.

  FoundationModel[]

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  OK

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 404

  The specified resource was not found.

Example responses

- The models that are currently deployed in the cluster.

  `{  "total_count": 1,  "limit": 100,  "first": {    "href": "https://us-south.ml.cloud.ibm.com/ml/v1/foundation_model_specs?version=2023-05-02"  },  "resources": [    {      "model_id": "bigcode/starcoder",      "label": "starcoder-15.5b",      "provider": "BigCode",      "source": "Hugging Face",      "short_description": "The StarCoder models are 15.5B parameter models that can generate code from natural language descriptions",      "tasks": [        {          "id": "code",          "ratings": {            "quality": 3          }        }      ],      "min_shot_size": 0,      "input_tier": "class_2",      "output_tier": "class_2",      "number_params": "15.5b"    }  ] }`

  

  



## List the supported tasks

Retrieve the list of tasks that are supported by the foundation models.

```
GET /ml/v1/foundation_model_tasks
```





### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### start

  string

  Token required for token-based pagination. This token cannot be determined by end user. It is generated by the service and it is set in the href available in the `next` field.

- ##### limit

  integer

  How many resources should be returned. By default limit is 100. Max limit allowed is 200.

  **Possible values:** 1 ≤ value ≤ 200

  **Default:** `100`

  **Example:** `50`

### Response

#### Response Body

FoundationModelTasks

System details.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Possible values:** 1 ≤ value ≤ 200

  **Example:** `10`

- ##### first

  Always included*

  The reference to the first item in the current page.

  PaginationFirst

- ##### total_count

  integer

  The total number of resources.

  **Example:** `1`

- ##### next

  A reference to the first item of the next page, if any.

  PaginationNext

- ##### resources

  The supported foundation model tasks.

  FoundationModelTask[]

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  OK

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 404

  The specified resource was not found.

Example responses

- The tasks that are currently supported by models deployed in the cluster.

  `{  "total_count": 1,  "limit": 100,  "first": {    "href": "https://us-south.ml.cloud.ibm.com/ml/v1/foundation_model_tasks?version=2023-05-02"  },  "resources": [    {      "task_id": "question_answering",      "label": "Question answering",      "rank": 1,      "description": "Based on a set of documents or dynamic content, create a chatbot or a question-answering feature grounded on specific content. E.g. building a Q&A resource from a broad knowledge base, providing customer service assistance."    }  ] }`

  

  



## Create a new notebook.

Create a new notebook

- either from scratch
- or by copying another notebook.

To create a notebook from scratch, you need to first upload the notebook content(`ipynb` format) to the project Cloud Object Storage (COS) and then reference it with the attribute `file_reference`. The other required attributes are `name`, `project` and `runtime`. The attribute `runtime` is used to specify the environment on which the notebook runs.

To copy a notebook, you only need to provide `name` and `source_guid` in the request body.

```
POST /v2/notebooks
```





### Request

#### Request Body

Required*

One of

Change Schema Parameter List

Specification of the notebook to be created.

**Example:**



- ##### name

  Required*

  string

  The name of the new notebook.

  **Example:** `my notebook`

- ##### file_reference

  Required*

  string

  The reference to the file in the object storage.

  **Example:** `notebook/my_notebook.ipynb`

- ##### runtime

  Required*

  A notebook runtime.

  NotebookRuntime

- ##### project

  Required*

  string

  The guid of the project in which to create the notebook.

  **Example:** `92ae0e27-9b11-4de9-a646-d46ca3c183d4`

- ##### description

  string

  A more verbose description of the notebook.

  **Example:** `this is my notebook`

- ##### originates_from

  The notebook origin.

  NotebookOrigin

- ##### kernel

  A notebook kernel.

  NotebookKernel

### Response

#### Response Body

One of

Change Schema Parameter List

Notebook information in a project as returned by a GET request.

- ##### metadata

  Metadata of a notebook in a project.

  NotebookMetadataInProject

- ##### entity

  Entity of a notebook.

  NotebookEntity

#### Status Code

- ##### 201

  Success. Created and returned a new notebook asset. Format follows v2/assets.

- ##### 400

  Bad request. One of the fields has invalid format/content.

- ##### 401

  Unauthorized. No/Malformed authentication provided.

- ##### 403

  Forbidden. User is not allowed to perform the target operation.

- ##### 429

  The number of requests has exceeded the rate limit.

Example responses

- `{  "metadata": {    "name": "my notebook",    "description": "this is my notebook",    "asset_type": "notebook",    "created": 1540471021134,    "created_at": "2021-07-01T12:37:01Z",    "owner_id": "IBMid-310000SG2Y",    "catalog_id": "463cb8d8-8480-4a98-b75a-f7443b7d0af9",    "asset_id": "41d09a9a-f771-48a2-9534-50c0c622356d",    "project_id": "b275be5f-10ff-47ee-bfc9-63f1ce5addbf"  },  "entity": {    "notebook": {      "kernel": {        "display_name": "Python 3.9 with Spark",        "name": "python3",        "language": "python3"      },      "originates_from": {        "type": "blank"      }    },    "runtime": {      "environment": "spark33py39-b275be5f-10ff-47ee-bfc9-63f1ce5addbf",      "spark_monitoring_enabled": true    },    "href": "/v2/assets/41d09a9a-f771-48a2-9534-50c0c622356d?project_id=b275be5f-10ff-47ee-bfc9-63f1ce5addbf"  } }`

  

  

- `{  "metadata": {    "name": "my notebook",    "description": "this is my notebook",    "asset_type": "notebook",    "created": 1540471021134,    "created_at": "2021-07-01T12:37:01Z",    "owner_id": "IBMid-310000SG2Y",    "catalog_id": "463cb8d8-8480-4a98-b75a-f7443b7d0af9",    "asset_id": "41d09a9a-f771-48a2-9534-50c0c622356d",    "project_id": "b275be5f-10ff-47ee-bfc9-63f1ce5addbf"  },  "entity": {    "notebook": {      "kernel": {        "display_name": "Python 3.9 with Spark",        "name": "python3",        "language": "python3"      },      "originates_from": {        "type": "notebook",        "guid": "ca3c0e27-46ca-83d4-a646-d49b11c14de9"      }    },    "runtime": {      "environment": "spark33py39-b275be5f-10ff-47ee-bfc9-63f1ce5addbf",      "spark_monitoring_enabled": true    },    "href": "/v2/assets/41d09a9a-f771-48a2-9534-50c0c622356d?project_id=b275be5f-10ff-47ee-bfc9-63f1ce5addbf"  } }`

  

  

- 

- 

- 

- 



## Retrieve the details of a large number of notebooks inside a project.

Retrieve the details of a large number of notebooks inside a project.

```
POST /v2/notebooks/list
```





### Request

#### Query Parameters

- ##### project_id

  Required*

  string

  The guid of the project.

- ##### include

  Required*

  string

  Additional info that will be included into the notebook details. Possible values are:

  - runtime

#### Request Body

Required*

NotebookListBody

Payload for a notebook list request.

**Examples:**



- ##### notebooks

  string[]

  The list of notebooks whose details will be retrieved.

### Response

#### Response Body

NotebooksResourceList

A list of notebook info as returned by a list query.

- ##### total_results

  Always included*

  integer

  The number of items in the resources list.

  **Example:** `1`

- ##### resources

  Always included*

  An array of notebooks.

  NotebookResource[]

#### Status Code

- ##### 200

  Success. Returned a list of notebook assets. Format follows v2/assets.

- ##### 400

  Bad request. One of the fields has invalid format/content.

- ##### 401

  Unauthorized. No/Malformed authentication provided.

- ##### 403

  Forbidden. User is not allowed to perform the target operation.

Example responses

- `{  "total_results": 1,  "resources": [    {      "metadata": {        "guid": "41d09a9a-f771-48a2-9534-50c0c622356d",        "url": "/v2/notebooks/41d09a9a-f771-48a2-9534-50c0c622356d"      },      "entity": {        "runtime": {          "environment": "spark33py39-b275be5f-10ff-47ee-bfc9-63f1ce5addbf",          "spark_monitoring_enabled": true        },        "asset": {          "asset_id": "41d09a9a-f771-48a2-9534-50c0c622356d",          "asset_type": "notebook",          "created_at": "2021-07-01T12:37:01Z",          "catalog_id": "463cb8d8-8480-4a98-b75a-f7443b7d0af9",          "version": 2,          "project_id": "b275be5f-10ff-47ee-bfc9-63f1ce5addbf",          "href": "/v2/assets/41d09a9a-f771-48a2-9534-50c0c622356d?project_id=b275be5f-10ff-47ee-bfc9-63f1ce5addbf"        }      }    }  ] }`

  

  

- 

- 

- 



## Delete a particular notebook, including the notebook asset.

Delete a particular notebook, including the notebook asset.

```
DELETE /v2/notebooks/{notebook_guid}
```





### Request

#### Path Parameters

- ##### notebook_guid

  Required*

  string

  The guid of the notebook.

### Response

#### Status Code

- ##### 204

  Successful request. Notebook is deleted.

- ##### 400

  Bad request. One of the fields has invalid format/content.

- ##### 401

  Unauthorized. No/Malformed authentication provided.

- ##### 403

  Forbidden. User is not allowed to perform the target operation.

Example responses

- 
- 
- 



## Revert the main notebook to a version.

Revert the main notebook to a version.

```
PUT /v2/notebooks/{notebook_guid}
```





### Request

#### Path Parameters

- ##### notebook_guid

  Required*

  string

  The guid of the main notebook.

#### Request Body

Required*

NotebookRevertBody

Payload for a request to revert to a specific notebook version.

**Examples:**



- ##### source

  Required*

  string

  The guid of the notebook version.

  **Example:** `ca3c0e27-46ca-83d4-a646-d49b11c14de9`

### Response

#### Response Body

NotebookInProject

Notebook information in a project as returned by a GET request.

- ##### metadata

  Metadata of a notebook in a project.

  NotebookMetadataInProject

- ##### entity

  Entity of a notebook.

  NotebookEntity

#### Status Code

- ##### 200

  Success. Reverted the main notebook to a version. Format follows v2/assets.

- ##### 400

  Bad request. One of the fields has invalid format/content.

- ##### 401

  Unauthorized. No/Malformed authentication provided.

- ##### 403

  Forbidden. User is not allowed to perform the target operation.

Example responses

- `{  "metadata": {    "name": "my notebook v4.2",    "description": "this is my notebook v4.2",    "asset_type": "notebook",    "created": 1540471021134,    "created_at": "2021-07-01T12:37:01Z",    "owner_id": "IBMid-310000SG2Y",    "catalog_id": "463cb8d8-8480-4a98-b75a-f7443b7d0af9",    "asset_id": "41d09a9a-f771-48a2-9534-50c0c622356d",    "project_id": "b275be5f-10ff-47ee-bfc9-63f1ce5addbf"  },  "entity": {    "notebook": {      "kernel": {        "display_name": "Python 3.9 with Spark",        "name": "python39",        "language": "python3"      },      "originates_from": {        "type": "blank"      }    },    "runtime": {      "environment": "spark33py39-b275be5f-10ff-47ee-bfc9-63f1ce5addbf",      "spark_monitoring_enabled": true    },    "href": "/v2/assets/41d09a9a-f771-48a2-9534-50c0c622356d?project_id=b275be5f-10ff-47ee-bfc9-63f1ce5addbf"  } }`

  

  

- 

- 

- 



## Update a particular notebook.

Update a particular notebook.

```
PATCH /v2/notebooks/{notebook_guid}
```





### Request

#### Path Parameters

- ##### notebook_guid

  Required*

  string

  The guid of the notebook.

#### Request Body

Required*

NotebookUpdateBody

Payload for a notebook update request.

**Examples:**



- ##### environment

  string

  The guid of the environment on which the notebook runs.

  **Example:** `d46ca0e27-a646-4de9-a646-9b113c183d4`

- ##### spark_monitoring_enabled

  boolean

  Spark monitoring enabled or not.

- ##### kernel

  A notebook kernel.

  NotebookKernel

### Response

#### Response Body

Notebook

Notebook information as returned by a GET request.

- ##### metadata

  Metadata of a notebook.

  NotebookMetadata

- ##### entity

  Entity of a notebook.

  NotebookEntity

#### Status Code

- ##### 200

  Success. Updated the notebook. Format follows v2/assets.

- ##### 400

  Bad request. One of the fields has invalid format/content.

- ##### 401

  Unauthorized. No/Malformed authentication provided.

- ##### 403

  Forbidden. User is not allowed to perform the target operation.

Example responses

- `{  "metadata": {    "name": "my notebook",    "description": "this is my notebook",    "asset_type": "notebook",    "created": 1540471021134,    "created_at": "2021-07-01T12:37:01Z",    "owner_id": "IBMid-310000SG2Y",    "catalog_id": "463cb8d8-8480-4a98-b75a-f7443b7d0af9",    "asset_id": "41d09a9a-f771-48a2-9534-50c0c622356d",    "project_id": "b275be5f-10ff-47ee-bfc9-63f1ce5addbf"  },  "entity": {    "notebook": {      "kernel": {        "display_name": "Python 3.9 with Spark",        "name": "python39",        "language": "python3"      },      "originates_from": {        "type": "blank"      }    },    "runtime": {      "environment": "d46ca0e27-a646-4de9-a646-9b113c183d4",      "spark_monitoring_enabled": false    },    "href": "/v2/assets/41d09a9a-f771-48a2-9534-50c0c622356d?project_id=b275be5f-10ff-47ee-bfc9-63f1ce5addbf"  } }`

  

  

- 

- 

- 



## Create a new version.

Create a version of a given notebook.

```
POST /v2/notebooks/{notebook_guid}/versions
```





### Request

#### Path Parameters

- ##### notebook_guid

  Required*

  string

  The guid of the notebook.

### Response

#### Response Body

NotebookVersionInProject

A notebook version in a project.

- ##### metadata

  Notebook version metadata.

  NotebookVersionMetadata

- ##### entity

  A notebook version entity in a project.

  NotebookVersionEntityInProject

#### Status Code

- ##### 200

  Success. Returned the notebook version definition.

- ##### 400

  Bad request. One of the fields has invalid format/content.

- ##### 401

  Unauthorized. No/Malformed authentication provided.

- ##### 403

  Forbidden. User is not allowed to perform the target operation.

Example responses

- `{  "metadata": {    "guid": "19d63b6b-81a1-4c05-bad2-36a2957bd6d0",    "url": "v2/notebooks/a528b427-d1cd-4039-8ddc-04203c2521e2/versions/1a1329e0-fd05-409a-8411-52db106e2142",    "created_at": 1543681714106  },  "entity": {    "master_notebook_guid": "a528b427-d1cd-4039-8ddc-04203c2521e2",    "project_id": "0f7c1111-a79d-45b2-9699-d4950e742964",    "created_by_iui": "IBMid-123456ABCD",    "file_reference": "myproject-donotdelete-pr-6p65nym92j1bv0/notebooks/GPU_ENVIRONMENT_DEFAULT_GBUXVKHH_version_1543781324804.ipynb",    "rev_id": 1  } }`

  

  

- 

- 

- 



## List the versions of a notebook.

List all versions of a particular notebook.

```
GET /v2/notebooks/{notebook_guid}/versions
```





### Request

#### Path Parameters

- ##### notebook_guid

  Required*

  string

  The guid of the notebook.

### Response

#### Response Body

NotebookVersionsListInProject

A list of notebook versions in a project.

- ##### total_results

  Always included*

  integer

  The number of items in the resources array.

  **Example:** `1`

- ##### resources

  Always included*

  An array of notebook versions.

  NotebookVersionInProject[]

#### Status Code

- ##### 200

  Success. Returned a list of versions of the notebook.

- ##### 400

  Bad request. One of the fields has invalid format/content.

- ##### 401

  Unauthorized. No/Malformed authentication provided.

- ##### 403

  Forbidden. User is not allowed to perform the target operation.

Example responses

- `{  "total_results": 1,  "resources": [    {      "metadata": {        "guid": "19d63b6b-81a1-4c05-bad2-36a2957bd6d0",        "url": "v2/notebooks/a528b427-d1cd-4039-8ddc-04203c2521e2/versions/1a1329e0-fd05-409a-8411-52db106e2142",        "created_at": 1543681714106      },      "entity": {        "master_notebook_guid": "a528b427-d1cd-4039-8ddc-04203c2521e2",        "project_id": "0f7c1111-a79d-45b2-9699-d4950e742964",        "created_by_iui": "IBMid-123456ABCD",        "file_reference": "myproject-donotdelete-pr-6p65nym92j1bv0/notebooks/GPU_ENVIRONMENT_DEFAULT_GBUXVKHH_version_1543781324804.ipynb",        "rev_id": 1      }    }  ] }`

  

  

- 

- 

- 



## Retrieve a notebook version.

Retrieve a particular version of a notebook.

```
GET /v2/notebooks/{notebook_guid}/versions/{version_guid}
```





### Request

#### Path Parameters

- ##### notebook_guid

  Required*

  string

  The guid of the notebook.

- ##### version_guid

  Required*

  string

  The guid of the version.

### Response

#### Response Body

NotebookVersionInProject

A notebook version in a project.

- ##### metadata

  Notebook version metadata.

  NotebookVersionMetadata

- ##### entity

  A notebook version entity in a project.

  NotebookVersionEntityInProject

#### Status Code

- ##### 200

  Success. Returned the version definition.

- ##### 400

  Bad request. One of the fields has invalid format/content.

- ##### 401

  Unauthorized. No/Malformed authentication provided.

- ##### 403

  Forbidden. User is not allowed to perform the target operation.

Example responses

- `{  "metadata": {    "guid": "19d63b6b-81a1-4c05-bad2-36a2957bd6d0",    "url": "v2/notebooks/a528b427-d1cd-4039-8ddc-04203c2521e2/versions/1a1329e0-fd05-409a-8411-52db106e2142",    "created_at": 1543681714106  },  "entity": {    "master_notebook_guid": "a528b427-d1cd-4039-8ddc-04203c2521e2",    "project_id": "0f7c1111-a79d-45b2-9699-d4950e742964",    "created_by_iui": "IBMid-123456ABCD",    "file_reference": "myproject-donotdelete-pr-6p65nym92j1bv0/notebooks/GPU_ENVIRONMENT_DEFAULT_GBUXVKHH_version_1543781324804.ipynb",    "rev_id": 1  } }`

  

  

- 

- 

- 



## Delete a notebook version.

Delete a particular version of a given notebook.

```
DELETE /v2/notebooks/{notebook_guid}/versions/{version_guid}
```





### Request

#### Path Parameters

- ##### notebook_guid

  Required*

  string

  The guid of the notebook.

- ##### version_guid

  Required*

  string

  The guid of the version.

### Response

#### Status Code

- ##### 204

  Success. The version is deleted.

- ##### 400

  Bad request. One of the fields has invalid format/content.

- ##### 401

  Unauthorized. No/Malformed authentication provided.

- ##### 403

  Forbidden. User is not allowed to perform the target operation.

Example responses

- 
- 
- 



## Create a new prompt / prompt template

This creates a new prompt with the provided parameters.

```
POST /v1/prompts
```





### Request

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### space_id

  string

  [REQUIRED] Specifies the space ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Request Body

Required*

wxPromptPost

- ##### name

  Required*

  string

  Name used to display the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My Prompt`

- ##### prompt

  Required*

  

  promptWithExternal

- ##### description

  string

  An optional description for the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My First Prompt`

- ##### created_at

  integer

  Time the prompt was created.

  **Example:** `1711504485261`

- ##### task_ids

  string[]

  **Possible values:** number of items = 1, Value must match regular expression `[a-zA-Z0-9-]*`

- ##### lock

  

  promptLock

- ##### model_version

  

  object

  - 

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

- ##### prompt_variables

  

  object

  - 

  - ##### 

    

    

    - 

    - ##### 

      

- ##### input_mode

  string

  Input mode in use for the prompt

  **Allowable values:** [`structured`,`freeform`,`chat`,`detached`]

### Response

#### Response Body

wxPromptResponse

- ##### name

  Always included*

  string

  Name used to display the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My Prompt`

- ##### prompt

  Always included*

  

  promptWithExternal

- ##### id

  string

  The prompt's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My First Prompt`

- ##### created_at

  integer

  Time the prompt was created.

  **Example:** `1711504485261`

- ##### created_by

  string

  The ID of the original prompt creator.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### last_updated_at

  integer

  Time the prompt was updated.

  **Example:** `1711504485261`

- ##### last_updated_by

  string

  The ID of the last user that modifed the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### task_ids

  string[]

  **Possible values:** number of items = 1, Value must match regular expression `[a-zA-Z0-9-]*`

- ##### governance_tracked

  boolean

  

- ##### lock

  

  promptLock

- ##### input_mode

  string

  Input mode in use for the prompt

  **Possible values:** [`structured`,`freeform`,`chat`,`detached`]

- ##### model_version

  

  object

  - 

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

- ##### prompt_variables

  

  object

  - 

  - ##### 

    

    

    - 

    - ##### 

      

- ##### is_template

  boolean

  

- ##### resource_key

  string

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Status Code

- ##### 201

  Created - Returned when created

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Get a prompt

This retrieves a prompt / prompt template with the given id.

```
GET /v1/prompts/{prompt_id}
```





### Request

#### Path Parameters

- ##### prompt_id

  Required*

  string

  Prompt ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### space_id

  string

  [REQUIRED] Specifies the space ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### restrict_model_parameters

  string

  Only return a set of model parameters compatiable with inferencing

  **Default:** `true`

### Response

#### Response Body

wxPromptResponse

- ##### name

  Always included*

  string

  Name used to display the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My Prompt`

- ##### prompt

  Always included*

  

  promptWithExternal

- ##### id

  string

  The prompt's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My First Prompt`

- ##### created_at

  integer

  Time the prompt was created.

  **Example:** `1711504485261`

- ##### created_by

  string

  The ID of the original prompt creator.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### last_updated_at

  integer

  Time the prompt was updated.

  **Example:** `1711504485261`

- ##### last_updated_by

  string

  The ID of the last user that modifed the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### task_ids

  string[]

  **Possible values:** number of items = 1, Value must match regular expression `[a-zA-Z0-9-]*`

- ##### governance_tracked

  boolean

  

- ##### lock

  

  promptLock

- ##### input_mode

  string

  Input mode in use for the prompt

  **Possible values:** [`structured`,`freeform`,`chat`,`detached`]

- ##### model_version

  

  object

  - 

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

- ##### prompt_variables

  

  object

  - 

  - ##### 

    

    

    - 

    - ##### 

      

- ##### is_template

  boolean

  

- ##### resource_key

  string

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Status Code

- ##### 200

  OK - Returned from GET when it succeeds

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Update a prompt

This updates a prompt / prompt template with the given id.

```
PATCH /v1/prompts/{prompt_id}
```





### Request

#### Path Parameters

- ##### prompt_id

  Required*

  string

  Prompt ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### space_id

  string

  [REQUIRED] Specifies the space ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Request Body

Required*

wxPromptPatch

- ##### name

  Required*

  string

  Name used to display the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My Prompt`

- ##### prompt

  Required*

  

  prompt

- ##### id

  string

  The prompt's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My First Prompt`

- ##### task_ids

  string[]

  **Possible values:** number of items = 1, Value must match regular expression `[a-zA-Z0-9-]*`

- ##### governance_tracked

  boolean

  

- ##### model_version

  

  object

  - 

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

- ##### prompt_variables

  

  object

  - 

  - ##### 

    

    

    - 

    - ##### 

      

- ##### input_mode

  string

  Input mode in use for the prompt

  **Allowable values:** [`structured`,`freeform`]

### Response

#### Response Body

wxPromptResponse

- ##### name

  Always included*

  string

  Name used to display the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My Prompt`

- ##### prompt

  Always included*

  

  promptWithExternal

- ##### id

  string

  The prompt's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My First Prompt`

- ##### created_at

  integer

  Time the prompt was created.

  **Example:** `1711504485261`

- ##### created_by

  string

  The ID of the original prompt creator.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### last_updated_at

  integer

  Time the prompt was updated.

  **Example:** `1711504485261`

- ##### last_updated_by

  string

  The ID of the last user that modifed the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### task_ids

  string[]

  **Possible values:** number of items = 1, Value must match regular expression `[a-zA-Z0-9-]*`

- ##### governance_tracked

  boolean

  

- ##### lock

  

  promptLock

- ##### input_mode

  string

  Input mode in use for the prompt

  **Possible values:** [`structured`,`freeform`,`chat`,`detached`]

- ##### model_version

  

  object

  - 

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

- ##### prompt_variables

  

  object

  - 

  - ##### 

    

    

    - 

    - ##### 

      

- ##### is_template

  boolean

  

- ##### resource_key

  string

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Status Code

- ##### 200

  OK - Returned on success

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Delete a prompt

This delets a prompt / prompt template with the given id.

```
DELETE /v1/prompts/{prompt_id}
```





### Request

#### Path Parameters

- ##### prompt_id

  Required*

  string

  Prompt ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### space_id

  string

  [REQUIRED] Specifies the space ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

### Response

#### Status Code

- ##### 204

  No Content - Returned on success

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Prompt lock modifications

Modifies the current locked state of a prompt.

```
PUT /v1/prompts/{prompt_id}/lock
```





### Request

#### Path Parameters

- ##### prompt_id

  Required*

  string

  Prompt ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### space_id

  string

  [REQUIRED] Specifies the space ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### force

  boolean

  Override a lock if it is currently taken.

#### Request Body

Required*

promptLock

- ##### locked

  Required*

  boolean

  True if the prompt is currently locked.

- ##### lock_type

  string

  Lock type: 'edit' for working on prompts/templates or 'governance'. Can only be supplied in PUT /lock requests.

  **Allowable values:** [`edit`,`governance`]

- ##### locked_by

  string

  Locked by is computed by the server and shouldn't be passed.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

### Response

#### Response Body

promptLock

- ##### locked

  Always included*

  boolean

  True if the prompt is currently locked.

- ##### lock_type

  string

  Lock type: 'edit' for working on prompts/templates or 'governance'. Can only be supplied in PUT /lock requests.

  **Possible values:** [`edit`,`governance`]

- ##### locked_by

  string

  Locked by is computed by the server and shouldn't be passed.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

#### Status Code

- ##### 200

  Ok - Returned when lock change is successful

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Get current prompt lock status

Retrieves the current locked state of a prompt.

```
GET /v1/prompts/{prompt_id}/lock
```





### Request

#### Path Parameters

- ##### prompt_id

  Required*

  string

  Prompt ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### space_id

  string

  [REQUIRED] Specifies the space ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

### Response

#### Response Body

promptLock

- ##### locked

  Always included*

  boolean

  True if the prompt is currently locked.

- ##### lock_type

  string

  Lock type: 'edit' for working on prompts/templates or 'governance'. Can only be supplied in PUT /lock requests.

  **Possible values:** [`edit`,`governance`]

- ##### locked_by

  string

  Locked by is computed by the server and shouldn't be passed.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

#### Status Code

- ##### 200

  Ok - Returned on success

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Get the inference input string for a given prompt

Computes the inference input string based on state of a prompt. Optionally replaces template params

```
POST /v1/prompts/{prompt_id}/input
```





### Request

#### Path Parameters

- ##### prompt_id

  Required*

  string

  Prompt ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### space_id

  string

  [REQUIRED] Specifies the space ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Request Body

wxPromptInputRequest

- ##### input

  string

  Override input string that will be used to generate the response. The string can contain template parameters.

  **Possible values:** Value must match regular expression `.*`

  **Example:** `Some text with variables.`

- ##### prompt_variables

  Supply only to replace placeholders. Object content must be key:value pairs where the 'key' is the parameter to replace and 'value' is the value to use.

  object

  - 

  - ##### 

    

    ``

    ``

### Response

#### Response Body

object

- ##### input

  string

  The prompt's input string used for inferences.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Status Code

- ##### 200

  Ok - Returned on success

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Add a new chat item to a prompt

This adds new chat items to the given prompt.

```
POST /v1/prompts/{prompt_id}/chat_items
```





### Request

#### Path Parameters

- ##### prompt_id

  Required*

  string

  Prompt ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### space_id

  string

  [REQUIRED] Specifies the space ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Request Body

Required*

chatItem[]

- ##### type

  string

  **Allowable values:** [`question`,`answer`]

- ##### content

  string

  **Possible values:** Value must match regular expression `.*`

  **Example:** `Some text`

- ##### status

  string

  **Allowable values:** [`ready`,`error`]

- ##### timestamp

  integer

  **Example:** `1711504485261`

### Response

#### Status Code

- ##### 200

  Ok - Returned on success

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Create a new prompt session

This creates a new prompt session.

```
POST /v1/prompt_sessions
```





### Request

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Request Body

Required*

wxPromptSession

- ##### name

  Required*

  string

  Name used to display the prompt session.

  **Possible values:** Value must match regular expression `^.{0,100}$`

  **Example:** `Session 1`

- ##### id

  string

  The prompt session's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]{32}`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt session.

  **Possible values:** Value must match regular expression `^[\s\S]{0,250}`

  **Example:** `My First Prompt Session`

- ##### created_at

  integer

  Time the session was created.

  **Example:** `1711504485261`

- ##### created_by

  string

  The ID of the original session creator.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### last_updated_at

  integer

  Time the session was updated.

  **Example:** `1711504485261`

- ##### last_updated_by

  string

  The ID of the last user that modifed the session.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### lock

  

  promptLock

- ##### prompts

  **Possible values:** 0 ≤ number of items ≤ 50

  wxPromptSessionEntry[]

### Response

#### Response Body

wxPromptResponse

- ##### name

  Always included*

  string

  Name used to display the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My Prompt`

- ##### prompt

  Always included*

  

  promptWithExternal

- ##### id

  string

  The prompt's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My First Prompt`

- ##### created_at

  integer

  Time the prompt was created.

  **Example:** `1711504485261`

- ##### created_by

  string

  The ID of the original prompt creator.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### last_updated_at

  integer

  Time the prompt was updated.

  **Example:** `1711504485261`

- ##### last_updated_by

  string

  The ID of the last user that modifed the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### task_ids

  string[]

  **Possible values:** number of items = 1, Value must match regular expression `[a-zA-Z0-9-]*`

- ##### governance_tracked

  boolean

  

- ##### lock

  

  promptLock

- ##### input_mode

  string

  Input mode in use for the prompt

  **Possible values:** [`structured`,`freeform`,`chat`,`detached`]

- ##### model_version

  

  object

  - 

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

- ##### prompt_variables

  

  object

  - 

  - ##### 

    

    

    - 

    - ##### 

      

- ##### is_template

  boolean

  

- ##### resource_key

  string

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Status Code

- ##### 201

  Created - Returned when created

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Get a prompt session

This retrieves a prompt session with the given id.

```
GET /v1/prompt_sessions/{session_id}
```





### Request

#### Path Parameters

- ##### session_id

  Required*

  string

  Prompt Session ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### prefetch

  boolean

  Include the most recent entry

### Response

#### Response Body

wxPromptSession

- ##### name

  Always included*

  string

  Name used to display the prompt session.

  **Possible values:** Value must match regular expression `^.{0,100}$`

  **Example:** `Session 1`

- ##### id

  string

  The prompt session's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]{32}`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt session.

  **Possible values:** Value must match regular expression `^[\s\S]{0,250}`

  **Example:** `My First Prompt Session`

- ##### created_at

  integer

  Time the session was created.

  **Example:** `1711504485261`

- ##### created_by

  string

  The ID of the original session creator.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### last_updated_at

  integer

  Time the session was updated.

  **Example:** `1711504485261`

- ##### last_updated_by

  string

  The ID of the last user that modifed the session.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### lock

  

  promptLock

- ##### prompts

  **Possible values:** 0 ≤ number of items ≤ 50

  wxPromptSessionEntry[]

#### Status Code

- ##### 200

  OK - Returned from GET when it succeeds

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Update a prompt session

This updates a prompt session with the given id.

```
PATCH /v1/prompt_sessions/{session_id}
```





### Request

#### Path Parameters

- ##### session_id

  Required*

  string

  Prompt Session ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Request Body

Required*

object

- ##### name

  string

  **Possible values:** Value must match regular expression `^.{0,100}$`

  **Example:** `Session 1`

- ##### description

  string

  An optional description for the prompt.

  **Possible values:** Value must match regular expression `^[\s\S]{0,250}`

  **Example:** `My First Prompt Session`

### Response

#### Response Body

wxPromptSession

- ##### name

  Always included*

  string

  Name used to display the prompt session.

  **Possible values:** Value must match regular expression `^.{0,100}$`

  **Example:** `Session 1`

- ##### id

  string

  The prompt session's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]{32}`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt session.

  **Possible values:** Value must match regular expression `^[\s\S]{0,250}`

  **Example:** `My First Prompt Session`

- ##### created_at

  integer

  Time the session was created.

  **Example:** `1711504485261`

- ##### created_by

  string

  The ID of the original session creator.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### last_updated_at

  integer

  Time the session was updated.

  **Example:** `1711504485261`

- ##### last_updated_by

  string

  The ID of the last user that modifed the session.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### lock

  

  promptLock

- ##### prompts

  **Possible values:** 0 ≤ number of items ≤ 50

  wxPromptSessionEntry[]

#### Status Code

- ##### 200

  OK - Returned from GET when it succeeds

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Delete a prompt session

This deletes a prompt session with the given id.

```
DELETE /v1/prompt_sessions/{session_id}
```





### Request

#### Path Parameters

- ##### session_id

  Required*

  string

  Prompt Session ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

### Response

#### Status Code

- ##### 204

  No Content - Returned on success

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Add a new prompt to a prompt session

This creates a new prompt associated with the given session.

```
POST /v1/prompt_sessions/{session_id}/entries
```





### Request

#### Path Parameters

- ##### session_id

  Required*

  string

  Prompt Session ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Request Body

Required*

wxPromptSessionEntry

- ##### name

  Required*

  string

  Name used to display the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My Prompt`

- ##### created_at

  Required*

  integer

  Time the prompt was created.

  **Example:** `1711504485261`

- ##### prompt

  Required*

  

  prompt

- ##### id

  string

  The prompt's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My First Prompt`

- ##### prompt_variables

  

  object

  - 

  - ##### 

    

    

    - 

    - ##### 

      

- ##### is_template

  boolean

  

- ##### input_mode

  string

  Input mode in use for the prompt

  **Allowable values:** [`structured`,`freeform`,`chat`]

### Response

#### Response Body

wxPromptSessionEntry

- ##### name

  Always included*

  string

  Name used to display the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My Prompt`

- ##### created_at

  Always included*

  integer

  Time the prompt was created.

  **Example:** `1711504485261`

- ##### prompt

  Always included*

  

  prompt

- ##### id

  string

  The prompt's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My First Prompt`

- ##### prompt_variables

  

  object

  - 

  - ##### 

    

    

    - 

    - ##### 

      

- ##### is_template

  boolean

  

- ##### input_mode

  string

  Input mode in use for the prompt

  **Possible values:** [`structured`,`freeform`,`chat`]

#### Status Code

- ##### 201

  Created - Returned when created

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Get entries for a prompt session

List entries from a given session.

```
GET /v1/prompt_sessions/{session_id}/entries
```





### Request

#### Path Parameters

- ##### session_id

  Required*

  string

  Prompt Session ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### bookmark

  string

  Bookmark from a previously limited get request

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### limit

  string

  Limit for results to retrieve, default 20

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

### Response

#### Response Body

wxPromptSessionEntryList

- ##### results

  

  object[]

  - 

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

- ##### bookmark

  string

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Status Code

- ##### 200

  Success - Returned when search completes

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Add a new chat item to a prompt session entry

This adds new chat items to the given entry.

```
POST /v1/prompt_sessions/{session_id}/entries/{entry_id}/chat_items
```





### Request

#### Path Parameters

- ##### session_id

  Required*

  string

  Prompt Session ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### entry_id

  Required*

  string

  Prompt Session Entry ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Request Body

Required*

chatItem[]

- ##### type

  string

  **Allowable values:** [`question`,`answer`]

- ##### content

  string

  **Possible values:** Value must match regular expression `.*`

  **Example:** `Some text`

- ##### status

  string

  **Allowable values:** [`ready`,`error`]

- ##### timestamp

  integer

  **Example:** `1711504485261`

### Response

#### Status Code

- ##### 201

  Created - Returned when created

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Prompt session lock modifications

Modifies the current locked state of a prompt session.

```
PUT /v1/prompt_sessions/{session_id}/lock
```





### Request

#### Path Parameters

- ##### session_id

  Required*

  string

  Prompt Session ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### force

  boolean

  Override a lock if it is currently taken.

#### Request Body

Required*

promptLock

- ##### locked

  Required*

  boolean

  True if the prompt is currently locked.

- ##### lock_type

  string

  Lock type: 'edit' for working on prompts/templates or 'governance'. Can only be supplied in PUT /lock requests.

  **Allowable values:** [`edit`,`governance`]

- ##### locked_by

  string

  Locked by is computed by the server and shouldn't be passed.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

### Response

#### Response Body

promptLock

- ##### locked

  Always included*

  boolean

  True if the prompt is currently locked.

- ##### lock_type

  string

  Lock type: 'edit' for working on prompts/templates or 'governance'. Can only be supplied in PUT /lock requests.

  **Possible values:** [`edit`,`governance`]

- ##### locked_by

  string

  Locked by is computed by the server and shouldn't be passed.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

#### Status Code

- ##### 200

  Ok - Returned when lock change is successful

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Get current prompt session lock status

Retrieves the current locked state of a prompt session.

```
GET /v1/prompt_sessions/{session_id}/lock
```





### Request

#### Path Parameters

- ##### session_id

  Required*

  string

  Prompt Session ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

### Response

#### Response Body

promptLock

- ##### locked

  Always included*

  boolean

  True if the prompt is currently locked.

- ##### lock_type

  string

  Lock type: 'edit' for working on prompts/templates or 'governance'. Can only be supplied in PUT /lock requests.

  **Possible values:** [`edit`,`governance`]

- ##### locked_by

  string

  Locked by is computed by the server and shouldn't be passed.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

#### Status Code

- ##### 200

  Ok - Returned on success

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Get a prompt session entry

This retrieves a prompt session entry with the given id.

```
GET /v1/prompt_sessions/{session_id}/entries/{entry_id}
```





### Request

#### Path Parameters

- ##### session_id

  Required*

  string

  Prompt Session ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### entry_id

  Required*

  string

  Prompt Session Entry ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

### Response

#### Response Body

wxPromptResponse

- ##### name

  Always included*

  string

  Name used to display the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My Prompt`

- ##### prompt

  Always included*

  

  promptWithExternal

- ##### id

  string

  The prompt's id. This value cannot be set. It is returned in responses only.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `1c29d9a1-9ba6-422d-aa39-517b26adc147`

- ##### description

  string

  An optional description for the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `My First Prompt`

- ##### created_at

  integer

  Time the prompt was created.

  **Example:** `1711504485261`

- ##### created_by

  string

  The ID of the original prompt creator.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### last_updated_at

  integer

  Time the prompt was updated.

  **Example:** `1711504485261`

- ##### last_updated_by

  string

  The ID of the last user that modifed the prompt.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

  **Example:** `IBMid-000000YYY0`

- ##### task_ids

  string[]

  **Possible values:** number of items = 1, Value must match regular expression `[a-zA-Z0-9-]*`

- ##### governance_tracked

  boolean

  

- ##### lock

  

  promptLock

- ##### input_mode

  string

  Input mode in use for the prompt

  **Possible values:** [`structured`,`freeform`,`chat`,`detached`]

- ##### model_version

  

  object

  - 

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

  - ##### 

    

    ``

    ``

- ##### prompt_variables

  

  object

  - 

  - ##### 

    

    

    - 

    - ##### 

      

- ##### is_template

  boolean

  

- ##### resource_key

  string

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Status Code

- ##### 200

  OK - Returned from GET when it succeeds

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Delete a prompt session entry

This deletes a prompt session entry with the given id.

```
DELETE /v1/prompt_sessions/{session_id}/entries/{entry_id}
```





### Request

#### Path Parameters

- ##### session_id

  Required*

  string

  Prompt Session ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- ##### entry_id

  Required*

  string

  Prompt Session Entry ID

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Query Parameters

- ##### project_id

  string

  [REQUIRED] Specifies the project ID as the target. One target must be supplied per request.

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

### Response

#### Status Code

- ##### 204

  No Content - Returned on success

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

#### No Sample Response

This method does not specify any sample responses.



## Infer text

Infer the next tokens for a given deployed model with a set of parameters.

```
POST /ml/v1/text/chat
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.text-chat.send`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

TextChatRequest

From a given prompt, infer the next tokens.

**Examples:**







- ##### model_id

  Required*

  string

  The model to use for the chat completion.

  Please refer to the [list of models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx).

- ##### messages

  Required*

  The messages for this chat session.

  **Possible values:** 1 ≤ number of items ≤ 1000

  TextChatMessages[]

  - 

  - 

    

    

    

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### tools

  Tool functions that can be called with the response.

  **Possible values:** 1 ≤ number of items ≤ 128

  TextChatParameterTools[]

- ##### tool_choice_option

  string

  Using `auto` means the model can pick between generating a message or calling one or more tools. Specify either `tool_choice_option` to allow the model to pick or `tool_choice` to force the model to call a tool.

- ##### tool_choice

  Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool. Specify either `tool_choice_option` to allow the model to pick or `tool_choice` to force the model to call a tool.

  TextChatToolChoiceTool

- ##### frequency_penalty

  number

  Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.

  **Possible values:** -2 < value < 2

  **Default:** `0`

- ##### logit_bias

  object

  Increasing or decreasing probability of tokens being selected during generation; a positive bias makes a token more likely to appear, while a negative bias makes it less likely.

  **Examples:**

  

- ##### logprobs

  boolean

  Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the content of message.

  **Default:** `false`

- ##### top_logprobs

  integer

  An integer specifying the number of most likely tokens to return at each token position, each with an associated log probability. The option `logprobs` must be set to `true` if this parameter is used.

  **Possible values:** 0 ≤ value ≤ 20

- ##### max_tokens

  integer

  The maximum number of tokens that can be generated in the chat completion. The total length of input tokens and generated tokens is limited by the model's context length.

  **Default:** `1024`

- ##### n

  integer

  How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep n as 1 to minimize costs.

  **Default:** `1`

- ##### presence_penalty

  number

  Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.

  **Possible values:** -2 < value < 2

  **Default:** `0`

- ##### response_format

  The chat response format parameters.

  TextChatResponseFormat

- ##### seed

  integer

  Random number generator seed to use in sampling mode for experimental repeatability.

  **Example:** `41`

- ##### stop

  string[]

  Stop sequences are one or more strings which will cause the text generation to stop if/when they are produced as part of the output. Stop sequences encountered prior to the minimum number of tokens being generated will be ignored.

  **Possible values:** 0 ≤ number of items ≤ 4, contains only unique items

  **Examples:**

  

- ##### temperature

  number

  What sampling temperature to use,. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.

  We generally recommend altering this or `top_p` but not both.

  **Possible values:** 0 < value < 2

  **Default:** `1`

- ##### top_p

  number

  An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.

  We generally recommend altering this or `temperature` but not both.

  **Possible values:** 0 < value < 1

  **Default:** `1`

- ##### time_limit

  integer

  Time limit in milliseconds - if not completed within this time, generation will stop. The text generated so far will be returned along with the `TIME_LIMIT`` stop reason. Depending on the users plan, and on the model being used, there may be an enforced maximum time limit.

  **Possible values:** value > 0

  **Example:** `600000`

- `curl --request POST 'https://{cluster_url}/ml/v1/text/chat?version=2023-10-25' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{  "model_id": "meta-llama/llama-3-8b-instruct",  "project_id": "63dc4cf1-252f-424b-b52d-5cdd9814987f",  "messages": [    {      "role": "system",      "content": "You are a helpful assistant."    },    {      "role": "user",      "content": [        {          "type": "text",          "text": "Who won the world series in 2020?"        }      ]    },    {      "role": "assistant",      "content": "The Los Angeles Dodgers won the World Series in 2020."    },    {      "role": "user",      "content": [        {          "type": "text",          "text": "Where was it played?"        }      ]    }  ],  "max_tokens": 100,  "temperature": 0,  "time_limit": 1000 }' `

  

  

- 

- 

### Response

#### Response Body

TextChatResponse

System details.

- ##### id

  Always included*

  string

  A unique identifier for the chat completion.

- ##### model_id

  Always included*

  string

  The model used for the chat completion.

  **Example:** `google/flan-ul2`

- ##### created

  Always included*

  integer

  The Unix timestamp (in seconds) of when the chat completion was created.

- ##### choices

  Always included*

  A list of chat completion choices. Can be more than one if `n` is greater than 1.

  **Possible values:** number of items ≥ 1

  TextChatResultChoice[]

- ##### model_version

  string

  The model version (using semantic versioning) if set.

  **Possible values:** 5 ≤ length ≤ 20, Value must match regular expression `^\d+.\d+.\d+$`

- ##### created_at

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### usage

  Usage statistics for the completion request.

  TextChatUsage

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  Successful operation

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- A text chat example.

  `{  "id": "cmpl-15475d0dea9b4429a55843c77997f8a9",  "model_id": "meta-llama/llama-3-8b-instruct",  "created": 1689958352,  "created_at": "2023-07-21T16:52:32.190Z",  "choices": [    {      "index": 0,      "message": {        "role": "assistant",        "content": "The 2020 World Series was played at Globe Life Field in Arlington, Texas,\nwhich is the home stadium of the Texas Rangers.\nHowever, the series was played with no fans in attendance due to the COVID-19 pandemic.\n"      },      "finish_reason": "stop"    }  ],  "usage": {    "completion_tokens": 47,    "prompt_tokens": 59,    "total_tokens": 106  } }`

  

  

- A tool calling example.

  `{  "id": "cmpl-15475d0dea9b4429a55843c77997f8a9",  "model_id": "meta-llama/llama-3-8b-instruct",  "created": 1689958352,  "created_at": "2023-07-21T16:52:32.190Z",  "choices": [    {      "index": 0,      "message": {        "role": "assistant",        "tool_calls": [          {            "id": "chatcmpl-tool-ef093f0cbbff4c6a973aa0873f73fc99",            "type": "function",            "function": {              "name": "get_current_weather",              "arguments": "{\n  \"location\": \"Boston, MA\",\n  \"unit\": \"fahrenheit\"\n}\n"            }          }        ]      },      "finish_reason": "stop"    }  ],  "usage": {    "completion_tokens": 18,    "prompt_tokens": 19,    "total_tokens": 37  } }`

  

  

- A text chat example with json output.

  `{  "id": "cmpl-09945b25c805491fb49e15439b8e5d84",  "model_id": "meta-llama/llama-3-8b-instruct",  "created": 1689958352,  "created_at": "2023-07-21T16:52:32.190Z",  "choices": [    {      "index": 0,      "message": {        "role": "assistant",        "content": "[\"The Los Angeles Dodgers won the World Series in 2020. They defeated the Tampa Bay Rays in six games.\"]"      },      "finish_reason": "stop"    }  ],  "usage": {    "completion_tokens": 35,    "prompt_tokens": 20,    "total_tokens": 55  } }`

  

  



## Infer text event stream

Infer the next tokens for a given deployed model with a set of parameters. This operation will return the output tokens as a stream of events.

```
POST /ml/v1/text/chat_stream
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.text-chat.send`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

TextChatRequest

From a given prompt, infer the next tokens in a server-sent events (SSE) stream.

- ##### model_id

  Required*

  string

  The model to use for the chat completion.

  Please refer to the [list of models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx).

- ##### messages

  Required*

  The messages for this chat session.

  **Possible values:** 1 ≤ number of items ≤ 1000

  TextChatMessages[]

  - 

  - 

    

    

    

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### tools

  Tool functions that can be called with the response.

  **Possible values:** 1 ≤ number of items ≤ 128

  TextChatParameterTools[]

- ##### tool_choice_option

  string

  Using `auto` means the model can pick between generating a message or calling one or more tools. Specify either `tool_choice_option` to allow the model to pick or `tool_choice` to force the model to call a tool.

- ##### tool_choice

  Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool. Specify either `tool_choice_option` to allow the model to pick or `tool_choice` to force the model to call a tool.

  TextChatToolChoiceTool

- ##### frequency_penalty

  number

  Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.

  **Possible values:** -2 < value < 2

  **Default:** `0`

- ##### logit_bias

  object

  Increasing or decreasing probability of tokens being selected during generation; a positive bias makes a token more likely to appear, while a negative bias makes it less likely.

  **Examples:**

  

- ##### logprobs

  boolean

  Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the content of message.

  **Default:** `false`

- ##### top_logprobs

  integer

  An integer specifying the number of most likely tokens to return at each token position, each with an associated log probability. The option `logprobs` must be set to `true` if this parameter is used.

  **Possible values:** 0 ≤ value ≤ 20

- ##### max_tokens

  integer

  The maximum number of tokens that can be generated in the chat completion. The total length of input tokens and generated tokens is limited by the model's context length.

  **Default:** `1024`

- ##### n

  integer

  How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep n as 1 to minimize costs.

  **Default:** `1`

- ##### presence_penalty

  number

  Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.

  **Possible values:** -2 < value < 2

  **Default:** `0`

- ##### response_format

  The chat response format parameters.

  TextChatResponseFormat

- ##### seed

  integer

  Random number generator seed to use in sampling mode for experimental repeatability.

  **Example:** `41`

- ##### stop

  string[]

  Stop sequences are one or more strings which will cause the text generation to stop if/when they are produced as part of the output. Stop sequences encountered prior to the minimum number of tokens being generated will be ignored.

  **Possible values:** 0 ≤ number of items ≤ 4, contains only unique items

  **Examples:**

  

- ##### temperature

  number

  What sampling temperature to use,. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.

  We generally recommend altering this or `top_p` but not both.

  **Possible values:** 0 < value < 2

  **Default:** `1`

- ##### top_p

  number

  An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.

  We generally recommend altering this or `temperature` but not both.

  **Possible values:** 0 < value < 1

  **Default:** `1`

- ##### time_limit

  integer

  Time limit in milliseconds - if not completed within this time, generation will stop. The text generated so far will be returned along with the `TIME_LIMIT`` stop reason. Depending on the users plan, and on the model being used, there may be an enforced maximum time limit.

  **Possible values:** value > 0

  **Example:** `600000`

### Response

#### Response Body

TextChatStreamItem[]

A set of server sent events, each event contains a response for one or more tokens. The results will be an array of events of the form `data: {<json event>}` where the schema of the individual `json event` is described below.

- ##### id

  Always included*

  string

  A unique identifier for the chat completion.

- ##### model_id

  Always included*

  string

  The model used for the chat completion.

  **Example:** `google/flan-ul2`

- ##### created

  Always included*

  integer

  The Unix timestamp (in seconds) of when the chat completion was created.

- ##### choices

  Always included*

  A list of chat completion choices. Can be more than one if `n` is greater than 1.

  **Possible values:** number of items ≥ 1

  TextChatResultChoiceStream[]

- ##### model_version

  string

  The model version (using semantic versioning) if set.

  **Possible values:** 5 ≤ length ≤ 20, Value must match regular expression `^\d+.\d+.\d+$`

- ##### created_at

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### usage

  Usage statistics for the completion request.

  TextChatUsage

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  Successful operation (`Content-Type: text/event-stream`).

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Generate embeddings

Generate embeddings from text input.

See the [documentation](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-embed-overview.html?context=wx&audience=wdp) for a description of text embeddings.

```
POST /ml/v1/text/embeddings
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.text-embeddings.send`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

EmbeddingsRequest

The text input for a given model to be used to generate the embeddings.

**Examples:**



- ##### model_id

  Required*

  string

  The `id` of the model to be used for this request. Please refer to the [list of models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp).

- ##### inputs

  Required*

  string[]

  The input text.

  **Possible values:** number of items ≤ 1000

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### parameters

  Parameters for text embedding requests.

  EmbeddingParameters

- `curl --request POST 'https://{cluster_url}/ml/v1/text/embeddings?version=2023-10-25' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Accept: application/json' -d '{  "inputs": [    "Youth craves thrills while adulthood cherishes wisdom.",    "Youth seeks ambition while adulthood finds contentment.",    "Dreams chased in youth while goals pursued in adulthood."  ],  "model_id": "slate",  "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f" }' `

  

  

### Response

#### Response Body

EmbeddingsResponse

System details.

- ##### model_id

  Always included*

  string

  The `id` of the model to be used for this request. Please refer to the [list of models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp).

- ##### results

  Always included*

  The embedding values for a given text.

  **Possible values:** number of items ≥ 0

  Embedding[]

- ##### created_at

  Always included*

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### input_token_count

  Always included*

  integer

  The number of input tokens that were consumed.

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  Successful operation

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- An array of embeddings for each input string.

  `{  "model_id": "slate",  "results": [    {      "embedding": [        -0.006929283,        -0.005336422,        -0.024047505      ]    }  ],  "created_at": "2024-02-21T17:32:28Z",  "input_token_count": 10 }`

  

  



## Start a text extraction request

Start a request to extract text and metadata from documents.

See the [documentation](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-api-text-extraction.html?context=wx&audience=wdp) for a description of text extraction.

```
POST /ml/v1/text/extractions
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.text-extraction.send`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

TextExtractionRequest

The input for the text extraction request.

**Examples:**





- ##### document_reference

  Required*

  A reference to data.

  TextExtractionDataReference

- ##### results_reference

  Required*

  A reference to data.

  TextExtractionDataReference

- ##### steps

  The steps for the text extraction pipeline.

  TextExtractionSteps

- ##### assembly_json

  object

  Set this as an empty object to specify `json` output.

  Note that this is not strictly required because if an `assembly_md` object is not found then the default will be `json`.

  **Default:** `{}`

- ##### assembly_md

  object

  Set this as an empty object to specify `markdown` output.

  **Example:** `{}`

- ##### custom

  User defined properties specified as key-value pairs.

  **Examples:**

  

  object

  - 

  - ##### 

    

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- `curl --request POST 'https://{cluster_url}/ml/v1/text/extractions?version=2023-10-25' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{  "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",  "document_reference": {    "type": "connection_asset",    "connection": {      "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"    },    "location": {      "file_name": "files/document.pdf"    }  },  "results_reference": {    "type": "connection_asset",    "connection": {      "id": "2a7c11bc-2913-48d0-9581-a8d9f40fa159"    },    "location": {      "file_name": "results"    }  },  "steps": {    "tables_processing": {      "enabled": true    }  } }' `

  

  

- 

### Response

#### Response Body

TextExtractionResponse

The text extraction response.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  TextExtractionMetadata

- ##### entity

  The document details for the text extraction.

  object

  - 

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

    ``

  - ##### 

    

    - 

    - ##### 

      

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 201

  Created. The `Content-Location` header will contain the URI reference to the created resource.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "name": "extract"  },  "entity": {    "document_reference": {      "type": "connection_asset",      "connection": {        "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"      },      "location": {        "file_name": "files/document.pdf"      }    },    "results_reference": {      "type": "connection_asset",      "connection": {        "id": "2a7c11bc-2913-48d0-9581-a8d9f40fa159"      },      "location": {        "file_name": "results"      }    },    "steps": {      "tables_processing": {        "enabled": true      }    },    "results": {      "status": "submitted",      "number_pages_processed": 0    }  } }`

  

  

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "name": "extract"  },  "entity": {    "document_reference": {      "type": "connection_asset",      "connection": {        "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"      },      "location": {        "file_name": "files/document.pdf"      }    },    "results_reference": {      "type": "connection_asset",      "connection": {        "id": "2a7c11bc-2913-48d0-9581-a8d9f40fa159"      },      "location": {        "file_name": "results"      }    },    "steps": {      "ocr": {        "languages_list": [          "en",          "fr"        ]      },      "tables_processing": {        "enabled": false      }    },    "results": {      "status": "submitted",      "number_pages_processed": 0    }  } }`

  

  



## Retrieve the text extraction requests

Retrieve the list of text extraction requests for the specified space or project.

This operation does not save the history, any requests that were deleted or purged will not appear in this list.

```
GET /ml/v1/text/extractions
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.text-extraction.list`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### start

  string

  Token required for token-based pagination. This token cannot be determined by end user. It is generated by the service and it is set in the href available in the `next` field.

- ##### limit

  integer

  How many resources should be returned. By default limit is 100. Max limit allowed is 200.

  **Possible values:** 1 ≤ value ≤ 200

  **Default:** `100`

  **Example:** `50`

### Response

#### Response Body

TextExtractionResources

A paginated list of resources.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Possible values:** 1 ≤ value ≤ 200

  **Example:** `10`

- ##### first

  Always included*

  The reference to the first item in the current page.

  PaginationFirst

- ##### total_count

  integer

  The total number of resources. Computed explicitly only when 'total_count=true' query parameter is present. This is in order to avoid performance penalties.

  **Example:** `1`

- ##### next

  A reference to the first item of the next page, if any.

  PaginationNext

- ##### resources

  A list of resources.

  TextExtractionResource[]

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  OK.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- `{  "limit": 10,  "first": {    "href": "https://us-south.ml.cloud.ibm.com/ml/v1/text_extractions"  },  "resources": [    {      "metadata": {        "id": "6213cf1-252f-424b-b52d-5cdd9814956c",        "created_at": "2023-05-02T16:27:51Z",        "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",        "name": "extract"      },      "entity": {        "document_reference": {          "type": "connection_asset",          "connection": {            "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"          },          "location": {            "file_name": "files/document.pdf"          }        },        "results_reference": {          "type": "connection_asset",          "connection": {            "id": "2a7c11bc-2913-48d0-9581-a8d9f40fa159"          },          "location": {            "file_name": "results"          }        },        "results": {          "status": "completed",          "number_pages_processed": 3,          "running_at": "2023-05-02T16:28:03Z",          "completed_at": "2023-05-02T16:29:31Z"        }      }    }  ] }`

  

  



## Get the results of the request

Retrieve the text extraction request with the specified identifier.

Note that there is a retention period of 2 days. If this retention period is exceeded then the request will be deleted and the results no longer available. In this case this operation will return `404`.

```
GET /ml/v1/text/extractions/{id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.text-extraction.get`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  The identifier of the extraction request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- `curl --request GET 'https://{cluster_url}/ml/v1/text/extractions/{id}?version=2023-10-25&project_id=12ac4cf1-252f-424b-b52d-5cdd9814987f' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Accept: application/json' `

  

  

### Response

#### Response Body

TextExtractionResponse

The text extraction response.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  TextExtractionMetadata

- ##### entity

  The document details for the text extraction.

  object

  - 

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

  - ##### 

    

    ``

  - ##### 

    

    - 

    - ##### 

      

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  OK.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "name": "extract"  },  "entity": {    "document_reference": {      "type": "connection_asset",      "connection": {        "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"      },      "location": {        "file_name": "files/document.pdf"      }    },    "results_reference": {      "type": "connection_asset",      "connection": {        "id": "2a7c11bc-2913-48d0-9581-a8d9f40fa159"      },      "location": {        "file_name": "results"      }    },    "steps": {      "tables_processing": {        "enabled": true      }    },    "results": {      "status": "running",      "number_pages_processed": 2,      "running_at": "2023-05-02T16:28:03Z"    }  } }`

  

  

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "created_at": "2023-05-02T16:27:51Z",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "name": "extract"  },  "entity": {    "document_reference": {      "type": "connection_asset",      "connection": {        "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"      },      "location": {        "file_name": "files/document.pdf"      }    },    "results_reference": {      "type": "connection_asset",      "connection": {        "id": "2a7c11bc-2913-48d0-9581-a8d9f40fa159"      },      "location": {        "file_name": "results"      }    },    "steps": {      "ocr": {        "languages_list": [          "en",          "fr"        ]      },      "tables_processing": {        "enabled": false      }    },    "results": {      "status": "submitted",      "number_pages_processed": 0    }  } }`

  

  



## Delete the request

Cancel the specified text extraction request and delete any associated results.

```
DELETE /ml/v1/text/extractions/{id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.text-extraction.delete`

### Request

#### Path Parameters

- ##### id

  Required*

  string

  The identifier of the extraction request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### hard_delete

  boolean

  Set to true in order to also delete the job or request metadata.

- `curl --request DELETE 'https://{cluster_url}/ml/v1/text/extractions/{id}?version=2023-10-25&project_id=12ac4cf1-252f-424b-b52d-5cdd9814987f' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' `

  

  

### Response

#### Status Code

- ##### 204

  Request deleted.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Infer text

Infer the next tokens for a given deployed model with a set of parameters.

```
POST /ml/v1/text/generation
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.foundation-model.send`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

TextGenRequest

From a given prompt, infer the next tokens.

**Examples:**





- ##### input

  Required*

  string

  The prompt to generate completions. Note: The method tokenizes the input internally. It is recommended not to leave any trailing spaces.

- ##### model_id

  Required*

  string

  The `id` of the model to be used for this request. Please refer to the [list of models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx).

  **Example:** `google/flan-ul2`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### parameters

  Properties that control the model and response.

  **Examples:**

  

  TextGenParameters

- ##### moderations

  Properties that control the moderations, for usages such as `Hate and profanity` (HAP) and `Personal identifiable information` (PII) filtering. This list can be extended with new types of moderations.

  **Examples:**

  

  Moderations

  - 

  - ##### 

    

    

- `curl --request POST 'https://{cluster_url}/ml/v1/text/generation?version=2023-05-02' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-raw '{  "model_id": "google/flan-t5-xxl",  "input": "how far is paris from bangalore:",  "parameters": {    "max_new_tokens": 100,    "time_limit": 1000  },  "project_id": "63dc4cf1-252f-424b-b52d-5cdd9814987f" }'`

  

  

### Response

#### Response Body

TextGenResponse

System details.

- ##### model_id

  Always included*

  string

  The `id` of the model for inference.

  **Example:** `google/flan-ul2`

- ##### created_at

  Always included*

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### results

  Always included*

  The generated tokens.

  **Possible values:** number of items ≥ 1

  object[]

  - 

  - ##### 

    

    ``

  - ##### 

    

    \````````````````

    ``

  - ##### 

    

    ``

  - ##### 

    

    ``

  - ##### 

    

    ``

  - ##### 

    

    

  - ##### 

    

    

  - ##### 

    

    - 

    - ##### 

      

      

- ##### model_version

  string

  The model version (using semantic versioning) if set.

  **Possible values:** 5 ≤ length ≤ 20, Value must match regular expression `^\d+.\d+.\d+$`

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  Successful operation

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- The generated text from the model along with other details.

  `{  "model_id": "google/flan-ul2",  "created_at": "2023-07-21T16:52:32.190Z",  "results": [    {      "generated_text": "4,000 km",      "generated_token_count": 4,      "input_token_count": 12,      "stop_reason": "eos_token"    }  ] }`

  

  

- The generated text from the model along with other details.

  `{  "model_id": "google/flan-t5-xl",  "created_at": "2023-07-21T16:52:32.190Z",  "results": [    {      "generated_text": "c/o USPS, PO Box 3000, Washington, D.C. 20001-5000, www.usps.com, or call **************. You can also visit the website at https://www.usps.com/contactus/. You can also contact them by telephone at 1-************. You can also send an email to ***************. You can find the US Postal Service on Facebook at https://www.facebook.com/postalservice/.",      "generated_token_count": 118,      "input_token_count": 11,      "stop_reason": "eos_token",      "moderations": {        "pii": [          {            "score": 0.8,            "input": false,            "position": {              "start": 74,              "end": 88            },            "entity": "PhoneNumber"          },          {            "score": 0.8,            "input": false,            "position": {              "start": 200,              "end": 212            },            "entity": "PhoneNumber"          },          {            "score": 0.8,            "input": false,            "position": {              "start": 244,              "end": 259            },            "entity": "EmailAddress"          }        ]      }    }  ] }`

  

  



## Infer text event stream

Infer the next tokens for a given deployed model with a set of parameters. This operation will return the output tokens as a stream of events.

```
POST /ml/v1/text/generation_stream
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.foundation-model.send`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

TextGenRequest

From a given prompt, infer the next tokens in a server-sent events (SSE) stream.

**Examples:**





- ##### input

  Required*

  string

  The prompt to generate completions. Note: The method tokenizes the input internally. It is recommended not to leave any trailing spaces.

- ##### model_id

  Required*

  string

  The `id` of the model to be used for this request. Please refer to the [list of models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx).

  **Example:** `google/flan-ul2`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### parameters

  Properties that control the model and response.

  **Examples:**

  

  TextGenParameters

- ##### moderations

  Properties that control the moderations, for usages such as `Hate and profanity` (HAP) and `Personal identifiable information` (PII) filtering. This list can be extended with new types of moderations.

  **Examples:**

  

  Moderations

  - 

  - ##### 

    

    

- `curl --request POST 'https://{cluster_url}/ml/v1/text/generation_stream?version=2023-05-02' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-raw '{  "model_id": "google/flan-t5-xxl",  "input": "how far is paris from bangalore:",  "parameters": {    "max_new_tokens": 100,    "time_limit": 1000  },  "project_id": "63dc4cf1-252f-424b-b52d-5cdd9814987f" }'`

  

  

### Response

#### Response Body

TextGenResponse[]

A set of server sent events, each event contains a response for one or more tokens. The results will be an array of events of the form `data: {<json event>}` where the schema of the individual `json event` is described below.

- ##### model_id

  Always included*

  string

  The `id` of the model for inference.

  **Example:** `google/flan-ul2`

- ##### created_at

  Always included*

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### results

  Always included*

  The generated tokens.

  **Possible values:** number of items ≥ 1

  object[]

  - 

  - ##### 

    

    ``

  - ##### 

    

    \````````````````

    ``

  - ##### 

    

    ``

  - ##### 

    

    ``

  - ##### 

    

    ``

  - ##### 

    

    

  - ##### 

    

    

  - ##### 

    

    - 

    - ##### 

      

      

- ##### model_version

  string

  The model version (using semantic versioning) if set.

  **Possible values:** 5 ≤ length ≤ 20, Value must match regular expression `^\d+.\d+.\d+$`

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  Successful operation (`Content-Type: text/event-stream`).

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Generate rerank

Rerank texts based on some queries.

```
POST /ml/v1/text/rerank
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.text-rerank.send`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

RerankRequest

The input texts and the queries for reranking.

**Examples:**



- ##### model_id

  Required*

  string

  The `id` of the model to be used for this request. Please refer to the [list of models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp).

- ##### inputs

  Required*

  The rank input strings.

  **Possible values:** 0 ≤ number of items ≤ 1000

  RerankInput[]

- ##### query

  Required*

  string

  The rank query.

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### parameters

  The properties used for reranking.

  RerankParameters

- `curl --request POST 'https://{cluster_url}/ml/v1/text/rerank?version=2023-10-25' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Accept: application/json' -d '{  "model_id": "cross-encoder/ms-marco-minilm-l-12-v2",  "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",  "inputs": [    {      "text": "In my younger years, I often reveled in the excitement of spontaneous adventures and embraced the thrill of the unknown, whereas in my grownup life, I've come to appreciate the comforting stability of a well-established routine."    },    {      "text": "As a young man, I frequently sought out exhilarating experiences, craving the adrenaline rush of life's novelties, while as a responsible adult, I've come to understand the profound value of accumulated wisdom and life experience."    }  ],  "query": "As a Youth, I craved excitement while in adulthood I followed Enthusiastic Pursuit.",  "parameters": {    "return_options": {      "top_n": 2    }  } }' `

  

  

### Response

#### Response Body

RerankResponse

System details.

- ##### model_id

  Always included*

  string

  The `id` of the model to be used for this request. Please refer to the [list of models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp).

- ##### results

  Always included*

  The ranked results.

  **Possible values:** number of items ≥ 0

  RerankedResults[]

- ##### created_at

  Always included*

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### input_token_count

  Always included*

  integer

  The number of input tokens that were consumed.

- ##### model_version

  string

  The model version (using semantic versioning) if set.

  **Possible values:** 5 ≤ length ≤ 20, Value must match regular expression `^\d+.\d+.\d+$`

- ##### query

  string

  The rank query, if requested.

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  Successful operation

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- An array of embeddings for each input string.

  `{  "model_id": "cross-encoder/ms-marco-minilm-l-12-v2",  "results": [    {      "index": 1,      "score": 0.7461    },    {      "index": 0,      "score": 0.8274    }  ],  "created_at": "2024-02-21T17:32:28Z",  "input_token_count": 20 }`

  

  



## Text tokenization

The text tokenize operation allows you to check the conversion of provided input to tokens for a given model. It splits text into words or sub-words, which then are converted to ids through a look-up table (vocabulary). Tokenization allows the model to have a reasonable vocabulary size.

```
POST /ml/v1/text/tokenization
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.text-tokenization.send`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

TextTokenizeRequest

The input string to tokenize.

**Examples:**



- ##### model_id

  Required*

  string

  The `id` of the model to be used for this request. Please refer to the [list of models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx).

  **Example:** `google/flan-ul2`

- ##### input

  Required*

  string

  The input string to tokenize.

  **Example:** `Write a tagline for an alumni association: Together we`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### parameters

  The parameters for text tokenization.

  TextTokenizeParameters

- `curl --request POST 'https://{cluster_url}/ml/v1/text/tokenization?version=2023-05-02' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-raw '{  "model_id": "google/flan-ul2,",  "input": "Write a tagline for an alumni association: Together we",  "parameters": {    "return_tokens": true  },  "project_id": "63dc4cf1-252f-424b-b52d-5cdd9814987f" }'`

  

  

### Response

#### Response Body

TextTokenizeResponse

The tokenization result.

- ##### model_id

  Always included*

  string

  The `id` of the model to be used for this request. Please refer to the [list of models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx).

  **Example:** `google/flan-ul2`

- ##### result

  Always included*

  The result of tokenizing the input string.

  TextTokenizeResult

#### Status Code

- ##### 200

  Successful operation

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- The response with the token count and the tokens, if requested.

  `{  "model_id": "google/flan-ul2",  "result": {    "token_count": 11,    "tokens": [      "Write",      "a",      "tag",      "line",      "for",      "an",      "alumni",      "associ",      "ation:",      "Together",      "we"    ]  } }`

  

  



## Time series forecast

Generate forecasts, or predictions for future time points, given historical time series data.

```
POST /ml/v1/time_series/forecast
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.time-series-forecast.send`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

TSForecastRequest

The forecast request.

**Examples:**



- ##### model_id

  Required*

  string

  The model to be used for generating a forecast. You can get the list of models by using [Foundation Model Specs](https://cloud.ibm.com/apidocs/watsonx-ai#list-foundation-model-specs) with `filters=function_time_series_forecast`.

  **Possible values:** 1 ≤ length ≤ 256, Value must match regular expression `^\S+$`

- ##### data

  Required*

  A payload of data matching `schema`. We assume the following about your data:

  - All timeseries are of equal length and are uniform in nature (the time difference between two successive rows is constant). This implies that there are no missing rows of data;
  - The data meet the minimum model-dependent historical context length which can be 512 or more rows per timeseries;

  Note that the example payloads shown are for illustration purposes only. An actual payload would necessary be much larger to meet minimum model-specific context lengths.

  object

  - 

  - ##### 

    

- ##### schema

  Required*

  Contains metadata about your timeseries data input.

  TSForecastInputSchema

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### parameters

  The parameters for the forecast request.

  TSForecastParameters

- `curl --request POST 'https://{cluster_url}/ml/v1/time_series/forecast?version=2023-10-25' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Accept: application/json' -d '{  "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",  "model_id": "ibm/ttm-1024-96-r2",  "schema": {    "timestamp_column": "date",    "id_columns": [      "ID1"    ]  },  "data": {    "date": [      "2020-01-01T00:00:00",      "2020-01-01T01:00:00",      "2020-01-05T01:00:00"    ],    "ID1": [      "D1",      "D1",      "D1"    ],    "TARGET1": [      1.46,      2.34,      4.55    ]  } }' `

  

  

### Response

#### Response Body

TSForecastResponse

The time series forecast response.

- ##### model_id

  string

  The model used to generate the forecast.

  **Example:** `ibm/ttm-1024-96-r2`

- ##### created_at

  date-time

  The time when the response was created in ISO 8601 format.

  **Example:** `2020-05-02T16:27:51Z`

- ##### results

  The list of prediction results. There will be a forecast for each time series in the input data. The `prediction_length` field in the request specifies the number of predictions in the results. The actual number of rows in the results will be equal to the `prediction length` multiplied by the number of unique ids in `id_columns`. The `timestamp_column` field in the request indicates the name of the timestamp column in the results.

  **Examples:**

  

  object[]

  - 

  - ##### 

    

- ##### input_data_points

  integer

  The number of input data points (number of rows in `data` * number of input columns in `data`).

  **Example:** `512`

- ##### output_data_points

  integer

  The number of forecasted data points (`prediction_length` * number of `target_columns` * number of unique ids in `id_columns`).

  **Example:** `1024`

#### Status Code

- ##### 200

  Successful operation

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- `{  "model_id": "ibm/ttm-1024-96-r2",  "created_at": "2020-05-02T16:27:51Z",  "results": [    {      "date": [        "2020-01-05T02:00:00",        "2020-01-05T03:00:00",        "2020-01-06T00:00:00"      ],      "ID1": [        "D1",        "D1",        "D1"      ],      "TARGET1": [        1.86,        3.24,        6.78      ]    }  ],  "input_data_points": 512,  "output_data_points": 1024 }`

  

  



## Create a new watsonx.ai training

Create a new watsonx.ai training in a project or a space.

The details of the base model and parameters for the training must be provided in the `prompt_tuning` object.

In order to deploy the tuned model you need to follow the following steps:

1. Create a WML model asset, in a space or a project, by providing the `request.json` as shown below:

   ```
   curl -X POST "https://{cpd_cluster}/ml/v4/models?version=2024-01-29" \
     -H "Authorization: Bearer <replace with your token>" \
     -H "content-type: application/json" \
     --data '{
        "name": "replace_with_a_meaningful_name",
        "space_id": "replace_with_your_space_id",
        "type": "prompt_tune_1.0",
        "software_spec": {
          "name": "watsonx-textgen-fm-1.0"
        },
        "metrics": [ from the training job ],
        "training": {
          "id": "05859469-b25b-420e-aefe-4a5cb6b595eb",
          "base_model": {
            "model_id": "google/flan-t5-xl"
          },
          "task_id": "generation",
          "verbalizer": "Input: {{input}} Output:"
        },
        "training_data_references": [
          {
            "connection": {
              "id": "20933468-7e8a-4706-bc90-f0a09332b263"
            },
            "id": "file_to_tune1.json",
            "location": {
              "bucket": "wxproject-donotdelete-pr-xeyivy0rx3vrbl",
              "path": "file_to_tune1.json"
            },
            "type": "connection_asset"
          }
        ]
      }'
   ```

   **Notes:**

   1. If you used the training request field `auto_update_model: true` then you can skip this step as the model will have been saved at the end of the training job.
   2. Rather than creating the payload for the model you can use the generated `request.json` that was stored in the `results_reference` field, look for the path in the field `entity.results_reference.location.model_request_path`.
   3. The model `type` must be `prompt_tune_1.0`.
   4. The software spec name must be `watsonx-textgen-fm-1.0`.

2. Create a tuned model deployment as described in the [create deployment documentation](https://cloud.ibm.com/apidocs/watsonx-ai#create-deployment).

```
POST /ml/v4/trainings
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.training.create`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

TrainingResourcePrototype

The `training_data_references` contain the training datasets and the `results_reference` the connection where results will be stored.

**Examples:**



- ##### name

  Required*

  string

  The name of the training.

  **Example:** `my-prompt-training`

- ##### results_reference

  Required*

  The training results. Normally this is specified as `type=container` (Service) or `type=fs` (Software) which means that it is stored in the space or project.

  **Examples:**

  

  ResultsLocation

  - 

  - ##### 

    

    \````

    ``

  - ##### 

    

    - 

    - ##### 

      

      

  - ##### 

    

  - ##### 

    

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### description

  string

  A description of the training.

  **Example:** `My prompt training.`

- ##### tags

  string[]

  A list of tags for this resource.

  **Possible values:** number of items ≤ 64

  **Examples:**

  

- ##### prompt_tuning

  Properties to control the prompt tuning.

  **Examples:**

  

  PromptTuning

- ##### training_data_references

  Training datasets.

  **Examples:**

  

  DataConnectionReference[]

- ##### custom

  User defined properties specified as key-value pairs.

  **Examples:**

  

  object

  - 

  - ##### 

    

- ##### auto_update_model

  boolean

  If set to `true` then the result of the training, if successful, will be uploaded to the repository as a model.

  **Default:** `false`

- `curl --request POST 'https://{cluster_url}/ml/v4/trainings?version=2023-05-02' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-raw '{  "name": "my-prompt-tune-training",  "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",  "prompt_tuning": {    "base_model": {      "model_id": "google/flan-t5-xl"    },    "task_id": "classification",    "tuning_type": "prompt_tuning",    "num_epochs": 30,    "learning_rate": 0.4,    "accumulate_steps": 3,    "batch_size": 10,    "max_input_tokens": 100,    "max_output_tokens": 100  },  "training_data_references": [    {      "id": "tune1_data.json",      "location": {        "path": "tune1_data.json"      },      "type": "container"    }  ],  "auto_update_model": true,  "results_reference": {    "location": {      "path": "tune1/results"    },    "type": "container"  } }'`

  

  

### Response

#### Response Body

TrainingResource

Training resource.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  Status of the training job.

  **Examples:**

  

  TrainingResourceEntity

#### Status Code

- ##### 201

  The training job has been created.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "name": "my-prompt-training",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "created_at": "2023-08-04T13:22:47.000Z"  },  "entity": {    "prompt_tuning": {      "base_model": {        "model_id": "google/flan-t5-xl"      },      "task_id": "classification"    },    "training_data_references": [      {        "id": "tune1_data.json",        "location": {          "path": "tune1_data.json"        },        "type": "container"      }    ],    "auto_update_model": true,    "results_reference": {      "location": {        "path": "tune1/results",        "training": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82",        "training_status": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82/training-status.json",        "assets_path": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82/assets",        "model_request_path": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82/assets/c29e7544-dfd0-4427-bc66-20fa6023e2e0/resources/wml_model/request.json"      },      "type": "container"    },    "status": {      "state": "completed",      "running_at": "2023-08-04T13:22:48.000Z",      "completed_at": "2023-08-04T13:22:55.289Z",      "metrics": [        {          "iteration": 0,          "ml_metrics": {            "loss": 4.49988          },          "timestamp": "2023-09-22T02:52:03.324Z"        },        {          "iteration": 1,          "ml_metrics": {            "loss": 3.86884          },          "timestamp": "2023-09-22T02:52:03.689Z"        },        {          "iteration": 2,          "ml_metrics": {            "loss": 4.05115          },          "timestamp": "2023-09-22T02:52:04.053Z"        }      ]    }  } }`

  

  



## Retrieve the list of trainings

Retrieve the list of trainings for the specified space or project.

```
GET /ml/v4/trainings
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.training.list`

### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### start

  string

  Token required for token-based pagination. This token cannot be determined by end user. It is generated by the service and it is set in the href available in the `next` field.

- ##### limit

  integer

  How many resources should be returned. By default limit is 100. Max limit allowed is 200.

  **Possible values:** 1 ≤ value ≤ 200

  **Default:** `100`

  **Example:** `50`

- ##### total_count

  boolean

  Compute the total count. May have performance impact.

- ##### tag.value

  string

  Return only the resources with the given tag value.

- ##### state

  string

  Filter based on on the training job state.

  **Allowable values:** [`queued`,`pending`,`running`,`storing`,`completed`,`failed`,`canceled`]

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

### Response

#### Response Body

TrainingResourceCollection

Information for paging when querying resources.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Possible values:** 1 ≤ value ≤ 200

  **Example:** `10`

- ##### first

  Always included*

  The reference to the first item in the current page.

  PaginationFirst

- ##### total_count

  integer

  The total number of resources. Computed explicitly only when 'total_count=true' query parameter is present. This is in order to avoid performance penalties.

  **Example:** `1`

- ##### next

  A reference to the first item of the next page, if any.

  PaginationNext

- ##### resources

  The training resources.

  TrainingResource[]

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  **Examples:**

  

  SystemDetails

  - 

  - ##### 

    

#### Status Code

- ##### 200

  OK.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- `{  "limit": 100,  "first": {    "href": "https://{cluster_url}/ml/v4/trainings"  },  "total_count": 1,  "resources": [    {      "metadata": {        "id": "6213cf1-252f-424b-b52d-5cdd9814956c",        "name": "my-prompt-training",        "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",        "created_at": "2023-08-04T13:22:47.000Z"      },      "entity": {        "prompt_tuning": {          "base_model": {            "model_id": "google/flan-t5-xl"          },          "task_id": "classification"        },        "training_data_references": [          {            "id": "tune1_data.json",            "location": {              "path": "tune1_data.json"            },            "type": "container"          }        ],        "auto_update_model": true,        "results_reference": {          "location": {            "path": "tune1/results",            "training": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82",            "training_status": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82/training-status.json",            "assets_path": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82/assets",            "model_request_path": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82/assets/c29e7544-dfd0-4427-bc66-20fa6023e2e0/resources/wml_model/request.json"          },          "type": "container"        },        "status": {          "state": "completed",          "running_at": "2023-08-04T13:22:48.000Z",          "completed_at": "2023-08-04T13:22:55.289Z",          "metrics": [            {              "iteration": 0,              "ml_metrics": {                "loss": 4.49988              },              "timestamp": "2023-09-22T02:52:03.324Z"            },            {              "iteration": 1,              "ml_metrics": {                "loss": 3.86884              },              "timestamp": "2023-09-22T02:52:03.689Z"            },            {              "iteration": 2,              "ml_metrics": {                "loss": 4.05115              },              "timestamp": "2023-09-22T02:52:04.053Z"            }          ]        }      }    }  ] }`

  

  



## Retrieve the training

Retrieve the training with the specified identifier.

```
GET /ml/v4/trainings/{training_id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.training.get`

### Request

#### Path Parameters

- ##### training_id

  Required*

  string

  The training identifier.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

### Response

#### Response Body

TrainingResource

Training resource.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  Status of the training job.

  **Examples:**

  

  TrainingResourceEntity

#### Status Code

- ##### 200

  OK.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

Example responses

- `{  "metadata": {    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",    "name": "my-prompt-training",    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",    "created_at": "2023-08-04T13:22:47.000Z"  },  "entity": {    "prompt_tuning": {      "base_model": {        "model_id": "google/flan-t5-xl"      },      "task_id": "classification"    },    "training_data_references": [      {        "id": "tune1_data.json",        "location": {          "path": "tune1_data.json"        },        "type": "container"      }    ],    "auto_update_model": true,    "results_reference": {      "location": {        "path": "tune1/results",        "training": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82",        "training_status": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82/training-status.json",        "assets_path": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82/assets",        "model_request_path": "tune1/results/360c40f7-ac0c-43ca-a95f-1a5421f93b82/assets/c29e7544-dfd0-4427-bc66-20fa6023e2e0/resources/wml_model/request.json"      },      "type": "container"    },    "status": {      "state": "completed",      "running_at": "2023-08-04T13:22:48.000Z",      "completed_at": "2023-08-04T13:22:55.289Z",      "metrics": [        {          "iteration": 0,          "ml_metrics": {            "loss": 4.49988          },          "timestamp": "2023-09-22T02:52:03.324Z"        },        {          "iteration": 1,          "ml_metrics": {            "loss": 3.86884          },          "timestamp": "2023-09-22T02:52:03.689Z"        },        {          "iteration": 2,          "ml_metrics": {            "loss": 4.05115          },          "timestamp": "2023-09-22T02:52:04.053Z"        }      ]    }  } }`

  

  



## Cancel or delete the training

Cancel or delete the specified training, once deleted all trace of the job is gone.

```
DELETE /ml/v4/trainings/{training_id}
```





### Auditing

Calling this method generates the following auditing event.

- `pm-20.training.delete`

### Request

#### Path Parameters

- ##### training_id

  Required*

  string

  The training identifier.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### hard_delete

  boolean

  Set to true in order to also delete the job or request metadata.

### Response

#### Status Code

- ##### 204

  Training cancelled.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Create a document extraction

Create a document extraction.

```
POST /ml/v1/tuning/documents
```





### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

DocumentExtractionRequest

The properties that are part of a request that supports spaces and projects. Either `space_id` or `project_id` has to be provided and is mandatory.

- ##### name

  Required*

  string

  The name of the document.

- ##### document_references

  Required*

  The documents for text extraction.

  **Possible values:** length ≥ 1

  DocumentExtractionObjectLocation[]

- ##### results_reference

  Required*

  A reference to data.

  ObjectLocationGithub

- ##### tags

  string[]

  A list of tags for this resource.

  **Possible values:** number of items ≤ 64

  **Examples:**

  

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

### Response

#### Response Body

DocumentExtractionResource

The response from getting a specified document extraction job.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  The document extraction job properties.

  DocumentExtractionResponse

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 201

  The document extraction job has been created

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

#### No Sample Response

This method does not specify any sample responses.



## Get document extractions

Get document extractions.

```
GET /ml/v1/tuning/documents
```





### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

### Response

#### Response Body

DocumentExtractionResources

The response of getting all document extraction jobs.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Possible values:** 1 ≤ value ≤ 200

  **Example:** `10`

- ##### resources

  The response from getting a specified document extraction job.

  DocumentExtractionResource[]

#### Status Code

- ##### 200

  OK

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

#### No Sample Response

This method does not specify any sample responses.



## Get document extraction

Get document extraction.

```
GET /ml/v1/tuning/documents/{id}
```





### Request

#### Path Parameters

- ##### id

  Required*

  string

  The `id` is the identifier that was returned in the `metadata.id` field of the request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

### Response

#### Response Body

DocumentExtractionResource

The response from getting a specified document extraction job.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  The document extraction job properties.

  DocumentExtractionResponse

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  The document extraction job has been created

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Cancel the document extraction

Cancel the specified document extraction and remove it.

```
DELETE /ml/v1/tuning/documents/{id}
```





### Request

#### Path Parameters

- ##### id

  Required*

  string

  The `id` is the identifier that was returned in the `metadata.id` field of the request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### hard_delete

  boolean

  Set to true in order to also delete the job metadata information.

### Response

#### Status Code

- ##### 204

  Document extraction cancelled.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Create a synthetic data generation job

Create a synthetic data generation job.

```
POST /ml/v1/tuning/synthetic_data
```





### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

SyntheticDataGenerationRequest

The details needed to create synthetic data generation job.

The `data_reference.type` must be `taxonomy_asset` and the `results_reference.type` will normally be something like `connection_asset` or `data_asset`.

- ##### name

  Required*

  string

  The name of the data.

  The value must be a lowercase alphanumeric value but it can also have non-consecutive dashes (-) and underscores (_). The value must start and end with an alphanumeric character.

  **Possible values:** 1 ≤ length ≤ 250, Value must match regular expression `^[^><%\\]*$`

  **Example:** `example-name`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### data_reference

  A reference to data.

  ObjectLocation

- ##### results_reference

  A reference to data.

  ObjectLocation

### Response

#### Response Body

SyntheticDataGenerationResource

The response from getting a specified synthetic data generation job.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  The synthetic data generation job properties.

  SyntheticDataGenerationResponse

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 201

  The synthetic data generation job has been created

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

#### No Sample Response

This method does not specify any sample responses.



## Get synthetic data generation jobs

```
GET /ml/v1/tuning/synthetic_data
```





### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

### Response

#### Response Body

SyntheticDataGenerationResources

The response of getting all synthetic data generation jobs.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Example:** `10`

- ##### resources

  The response from getting a specified synthetic data generation job.

  SyntheticDataGenerationResource[]

#### Status Code

- ##### 200

  OK

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

#### No Sample Response

This method does not specify any sample responses.



## Get synthetic data generation job

```
GET /ml/v1/tuning/synthetic_data/{id}
```





### Request

#### Path Parameters

- ##### id

  Required*

  string

  The `id` is the identifier that was returned in the `metadata.id` field of the request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

### Response

#### Response Body

SyntheticDataGenerationResource

The response from getting a specified synthetic data generation job.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  The synthetic data generation job properties.

  SyntheticDataGenerationResponse

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  The synthetic data generation job has been created

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Cancel the synthetic data generation

Cancel the synthetic data generation and remove it.

```
DELETE /ml/v1/tuning/synthetic_data/{id}
```





### Request

#### Path Parameters

- ##### id

  Required*

  string

  The `id` is the identifier that was returned in the `metadata.id` field of the request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### hard_delete

  boolean

  Set to true in order to also delete the job metadata information.

### Response

#### Status Code

- ##### 204

  Synthetic data generation cancelled.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Create a taxonomy job

Create a taxonomy job.

```
POST /ml/v1/tuning/taxonomies_imports
```





### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

#### Request Body

Required*

TaxonomyRequest

The request fields to create Taxonomy job.

The `data_reference.type` must be set to `github`.

- ##### name

  Required*

  string

  The name of the document.

  **Possible values:** 1 ≤ length ≤ 32, Value must match regular expression `^[a-zA-Z][a-zA-Z-_]*[a-zA-Z]$`

- ##### description

  string

  The description of the Taxonomy job.

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `3fc54cf1-252f-424b-b52d-5cdd9814987f`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `12ac4cf1-252f-424b-b52d-5cdd9814987f`

- ##### data_reference

  A reference to data.

  ObjectLocation

- `curl --request POST 'https://{cluster_url}/ml/v1/tuning/taxonomies_imports?version=2023-10-25' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-raw '{  "name": "taxonomyName",  "description": "Taxonomy",  "project_id": "bfdae754-f0ef-45c6-a982-50b222f82015",  "data_reference": {    "type": "github",    "location": {      "secret_manager_url": "https://5db94803-9c37-498b-b4bd-d601ac4a0518.eu-gb.secrets-manager.test.appdomain.cloud/api/v2/secrets",      "secret_id": "539f678e-3436-5d70-5c62-e98250bf0427",      "path": "."    }  } }' `

  

  

### Response

#### Response Body

TaxonomyResource

The response fields from a Taxonomy request.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  The Taxonomy entity.

  The `data_reference.type` will be `github` and the `results_reference.type` will be set to `taxonomy_asset`.

  TaxonomyResponse

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 201

  The taxonomy job has been created.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

#### No Sample Response

This method does not specify any sample responses.



## Get taxonomy jobs

```
GET /ml/v1/tuning/taxonomies_imports
```





### Request

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

### Response

#### Response Body

TaxonomyResources

The list of Taxonomy jobs in specified project or space.

- ##### limit

  Always included*

  integer

  The number of items to return in each page.

  **Example:** `10`

- ##### resources

  The Taxonomy jobs in a project or space.

  TaxonomyResource[]

#### Status Code

- ##### 200

  OK

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

#### No Sample Response

This method does not specify any sample responses.



## Get taxonomy job

```
GET /ml/v1/tuning/taxonomies_imports/{id}
```





### Request

#### Path Parameters

- ##### id

  Required*

  string

  The `id` is the identifier that was returned in the `metadata.id` field of the request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

### Response

#### Response Body

TaxonomyResource

The response fields from a Taxonomy request.

- ##### metadata

  Common metadata for a resource where `project_id` or `space_id` must be present.

  **Examples:**

  

  ResourceMeta

- ##### entity

  The Taxonomy entity.

  The `data_reference.type` will be `github` and the `results_reference.type` will be set to `taxonomy_asset`.

  TaxonomyResponse

- ##### system

  Optional details coming from the service and related to the API call or the associated resource.

  SystemDetails

#### Status Code

- ##### 200

  The taxonomy job has been created.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Cancel or delete the taxonomy job

Cancel or delete the taxonomy job.

```
DELETE /ml/v1/tuning/taxonomies_imports/{id}
```





### Request

#### Path Parameters

- ##### id

  Required*

  string

  The `id` is the identifier that was returned in the `metadata.id` field of the request.

#### Query Parameters

- ##### version

  Required*

  date

  The version date for the API of the form `YYYY-MM-DD`.

  **Example:** `2023-07-07`

- ##### project_id

  string

  The project that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `a77190a2-f52d-4f2a-be3d-7867b5f46edc`

- ##### space_id

  string

  The space that contains the resource. Either `space_id` or `project_id` query parameter has to be given.

  **Possible values:** length = 36, Value must match regular expression `^[a-zA-Z0-9-]*$`

  **Example:** `63dc4cf1-252f-424b-b52d-5cdd9814987f`

- ##### hard_delete

  boolean

  Set to `true` in order to also delete the job metadata information.

### Response

#### Status Code

- ##### 204

  Taxonomy cancelled.

- ##### 400

  Bad request, the response body should contain the reason.

- ##### 401

  Unauthorized.

- ##### 403

  Forbidden, an authentication error including trying to access an unauthorized space or project.

- ##### 404

  The specified resource was not found.

#### No Sample Response

This method does not specify any sample responses.



## Get utility agent tools

This retrieves the complete list of supported utility agent tools and contains information required for running each tool.

```
GET /v1-beta/utility_agent_tools
```





### Request

#### No Request Parameters

This method does not accept any request parameters.

- `curl --request GET 'https://{cluster_url}/v1-beta/utility_agent_tools' -H 'Accept: application/json' `

  

  

### Response

#### Response Body

wxUtilityAgentToolsResponse

- ##### resources

  Always included*

  

  utilityAgentTool[]

#### Status Code

- ##### 200

  OK - Returned from GET when it succeeds

Example responses

- Get all utility agent tools.

  `{  "resources": [    {      "name": "GoogleSearch",      "description": "Search for online trends, news, current events, real-time information, or research topics.",      "agent_description": "Search for online trends, news, current events, real-time information, or research topics.",      "config_schema": {        "title": "config schema for GoogleSearch tool",        "type": "object",        "properties": {          "maxResults": {            "title": "Max number of results to return",            "type": "integer",            "minimum": 1,            "maximum": 20,            "wx_ui_name": "Max results",            "wx_ui_field_type": "numberInput",            "wx_ui_default": 10          }        }      }    },    {      "name": "WebCrawler",      "description": "Useful for when you need to summarize a webpage. Do not use for Web search.",      "agent_description": "Useful for when you need to summarize a webpage. Do not use for Web search.",      "input_schema": {        "type": "object",        "properties": {          "url": {            "title": "url",            "description": "URL for the webpage to be scraped",            "type": "string",            "pattern": "^(https?://)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([/\\w \\.-]*)*/?$"          }        },        "required": [          "url"        ]      }    },    {      "name": "PythonInterpreter",      "description": "Run Python code generated by the agent model.",      "agent_description": "Run Python code and return the console output. Use for isolated calculations, computations or data manipulation. In Python, the following modules are available: Use numpy, pandas, scipy and sympy for working with data. Use matplotlib to plot charts. Other Python libraries are also available -- however, prefer using the ones above. Prefer using qualified imports -- `import library; library.thing()` instead of `import thing from library`. Do not attempt to install libraries manually -- it will not work. Do not use this tool multiple times in a row, always write the full code you want to run in a single invocation. If you get an error running Python code, try to generate a better one that will pass. If the tool returns result that starts with IMAGE(, follow instructions for rendering images."    }  ] }`

  

  



## Get utility agent tool

This retrieves the details of an utility agent tool and contains information required for running the tool. Providing authentication and configuration params may return additional details.

```
GET /v1-beta/utility_agent_tools/{tool_id}
```





### Request

#### Path Parameters

- ##### tool_id

  Required*

  string

  Tool name

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

- `curl --request GET 'https://{cluster_url}/v1-beta/utility_agent_tools/RAGQuery' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' `

  

  

### Response

#### Response Body

utilityAgentTool

- ##### name

  Always included*

  string

  Name of the tool

  **Example:** `GoogleSearch`

- ##### description

  Always included*

  string

  A plain text description of what the tool is used for.

  **Example:** `Search for online trends, news, current events, real-time information, or research topics.`

- ##### agent_description

  string

  The precise instruction to agent LLMs and should be treated as part of the system prompt. If not provided, `description` can be used in it's place.

  **Example:** `Search for online trends, news, current events, real-time information, or research topics.`

- ##### input_schema

  The JSON schema of the input that is provided when running the tool if applicable.

  object

  - 

  - ##### 

    

- ##### config_schema

  The JSON schema of the config that can be provided when running the tool if applicable.

  **Examples:**

  

  object

  - 

  - ##### 

    

#### Status Code

- ##### 200

  OK - Returned from GET when it succeeds

Example responses

- Get RAGQuery agent tool with dynamic agent_description.

  `{  "name": "RAGQuery",  "description": "Search the documents in a vector index.",  "agent_description": "Search information in documents to provide context to a user query. Useful when asked to ground the answer in specific knowledge about watsonx documentation.",  "config_schema": {    "title": "config schema for RAGQuery tool",    "type": "object",    "properties": {      "vectorIndexId": {        "title": "Vector index identifier",        "type": "string"      },      "projectId": {        "title": "Project identifier",        "type": "string"      },      "spaceId": {        "title": "Space identifier",        "type": "string"      }    },    "required": [      "vectorIndexId"    ],    "oneOf": [      {        "required": [          "projectId"        ]      },      {        "required": [          "spaceId"        ]      }    ]  } }`

  

  



## Run a utility agent tool

This runs a utility agent tool given an input and optional configuration parameters.

Some tools can choose to tailor the response based on the access token identity.

```
POST /v1-beta/utility_agent_tools/run
```





### Request

#### Request Body

Required*

One of

Change Schema Parameter List

**Example:**



- ##### input

  Required*

  string

  Input to be used when running tool that has no input_schema.

  **Example:** `What was the weather in Toronto on January 13th 2025?`

- ##### tool_name

  string

  The name of the tool to be run.

  **Example:** `GoogleSearch`

- ##### config

  toolConfig

  

- `curl --request POST 'https://{cluster_url}/v1-beta/utility_agent_tools/run' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-raw '{  "tool_name": "GoogleSearch",  "input": "What was the weather in Toronto on January 13th 2025?",  "config": {    "maxResults": 3  } }' `

  

  

- 

- 

### Response

#### Response Body

wxUtilityAgentToolsRunResponse

- ##### output

  Always included*

  The output from running the tool.

  **Example:** `[{"title":"Toronto, Ontario, Canada Monthly Weather | AccuWeather","description":"January. January February March April May June July August September October November December. 2025 ... 13°. 29. 37°. 18°. 30. 34°. 16°. 31. 36°. 18°. 1. 18°. 11 ...","url":"https://www.accuweather.com/en/ca/toronto/m5h/january-weather/55488"},{"title":"Canada weather forecast for Tuesday, 13 January 2026","description":"Weather in Canada during the last few years on January 13 ; 2025 - January 13, 32 ° / 26 °, 0 in ; 2024 - January 13, 39 ° / 26 °, 0.46 in ; 2023 - January 13, 32 ...","url":"https://www.weather25.com/north-america/canada?page=date&date=13-1"},{"title":"Toronto January 2025 Historical Weather Data (Ontario, Canada ...","description":"January 2025 Weather History in Toronto Ontario, Canada. The data for ... -SN, BR. Mon, Jan 13, Light Snow, Light Snow and Ice Pellets, Mist, Drifting ...","url":"https://weatherspark.com/h/m/19863/2025/1/Historical-Weather-in-January-2025-in-Toronto-Ontario-Canada"}]`

#### Status Code

- ##### 200

  OK - Returned when tool ran succesfully

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

Example responses

- Results of the GoogleSearch tool.

  `{  "output": "[{\"title\":\"Toronto, Ontario, Canada Monthly Weather | AccuWeather\",\"description\":\"January. January February March April May June July August September October November December. 2025 ... 13°. 29. 37°. 18°. 30. 34°. 16°. 31. 36°. 18°. 1. 18°. 11 ...\",\"url\":\"https://www.accuweather.com/en/ca/toronto/m5h/january-weather/55488\"},{\"title\":\"Anthony Slater on X: \\\"Draymond Green missed the Warriors ...\",\"description\":\"Draymond Green missed the Warriors shootaround in Toronto this morning. Under the weather. He is questionable tonight with an illness. 4:45 PM · Jan 13, ...\",\"url\":\"https://x.com/anthonyVslater/status/1878845945854730255\"},{\"title\":\"Canada weather forecast for Tuesday, 13 January 2026\",\"description\":\"Weather in Canada during the last few years on January 13 ; 2025 - January 13, 32 ° / 26 °, 0 in ; 2024 - January 13, 39 ° / 26 °, 0.46 in ; 2023 - January 13, 32 ...\",\"url\":\"https://www.weather25.com/north-america/canada?page=date&date=13-1\"}]" }`

  

  

- Results of the PythonInterpreter tool.

  `{  "output": "20" }`

  

  

- Results of the WebCrawler tool.

  `{  "output": "\"{\\\"url\\\":\\\"https://www.ibm.com/us-en\\\",\\\"contentType\\\":\\\"text/html;charset=utf-8\\\",\\\"content\\\":\\\"IBM - United States\\\\n\\\\nBoost developer productivity with AI\\\\n\\\\nAchieve 59% average time savings on code documentation¹ and reduce development costs by 30%²\\\\n\\\\nOvercome developer challenges\\\\n\\\\nExplore watsonx Code Assistant\\\\n\\\\nLatest news\\\\n\\\\nArvind Krishna Celebrates the Work of a Pioneer at the TIME100 AI Impact Awards\\\\n\\\\nIBM and Lenovo Expand Strategic Technology Partnership in the Kingdom of Saudi Arabia\\\\n\\\\nIBM Study: Gen AI Will Elevate Financial Performance of Banks in 2025\\\\n\\\\nTelefónica Tech and IBM Sign a Collaboration Agreement for Quantum-Safe Technology\\\\n\\\\nIBM RELEASES FOURTH-QUARTER RESULTS\\\\n\\\\nIBM BOARD APPROVES REGULAR QUARTERLY CASH DIVIDEND\\\\n\\\\nIBM and Palo Alto Networks Find Platformization is Key to Reduce Cybersecurity Complexity\\\\n\\\\ne& Collaborates with IBM to Launch Pioneering End-to-End AI Governance Platform\\\\n\\\\nRecommended for you\\\\n\\\\nRead why tailor-made AI delivers precision power\\\\n\\\\nLearn AI skills you’ll need for 2025\\\\n\\\\nListen to the episode: DeepSeek facts vs hype and more\\\\n\\\\nMeet Meta Llama 3.2 models on watsonx\\\\n\\\\nAI insights and tools\\\\n\\\\nFor developers\\\\n\\\\nGrow your skills and create something new with our AI tools and foundation models. Then connect, collaborate and innovate with your peers.\\\\n\\\\nStart building with IBM Granite models\\\\n\\\\nExplore AI courses, APIs, data sets and more\\\\n\\\\nAccelerate software development with watsonx Code Assistant\\\\n\\\\nCheck out the watsonx.ai Developer Toolkit\\\\n\\\\nFor business leaders\\\\n\\\\nTransform business and drive growth with AI tools, technology and insights that help you stay competitive—and responsibly map your organization's future.\\\\n\\\\nRead the CEO's guide to generative AI\\\\n\\\\nGet the AI in Action report\\\\n\\\\nExplore IBM's approach to AI ethics\\\\n\\\\nSubscribe to the Think newsletter\\\\n\\\\nThink 2025\\\\n\\\\nJoin 5,000+ senior business and technology leaders at Think 2025 on 5–8 May 2025 in Boston, Massachusetts\\\\n\\\\nRegister today\\\\n\\\\nTechnology & Consulting\\\\n\\\\nFrom next-generation AI to cutting edge hybrid cloud solutions to the deep expertise of IBM Consulting, IBM has what it takes to help you reinvent how your business works in the age of AI.\\\\n\\\\nGet the latest product offers and discounts\\\\n\\\\nAI solutions\\\\n\\\\nGo from AI pilots to production with AI technologies built for business\\\\n\\\\nAI models\\\\n\\\\nGet started with cost-efficient AI models, tailored for business and optimized for scale\\\\n\\\\nConsulting\\\\n\\\\nEngage with IBM Consulting to design, build and operate high-performing businesses\\\\n\\\\nAnalytics\\\\n\\\\nSupport data-driven decisions for your business\\\\n\\\\nIT automation\\\\n\\\\nDiscover how automation solutions increase productivity while managing costs\\\\n\\\\nCompute & servers\\\\n\\\\nHandle mission-critical workloads while maintaining security, reliability and control of your entire IT infrastructure\\\\n\\\\nDatabases\\\\n\\\\nRun your applications, analytics and generative AI with databases on any cloud\\\\n\\\\nSecurity & identity\\\\n\\\\nSecure hybrid cloud and AI with data and identity-centric cybersecurity solutions\\\\n\\\\nInside IBM\\\\n\\\\nOur company\\\\n\\\\nExplore IBM history and culture of putting technology to work in the real world\\\\n\\\\nAbout IBM\\\\n\\\\nOur history\\\\n\\\\nOur impact\\\\n\\\\nLearn about IBM's commitment to environmental, equitable and ethical pillars\\\\n\\\\nCorporate social responsibility\\\\n\\\\nDiversity and inclusion\\\\n\\\\nOur innovations\\\\n\\\\nVisit the IBM lab, and see what's in store for the future of computing\\\\n\\\\nIBM Research\\\\n\\\\nQuantum computing\\\\n\\\\nTake the next step\\\\n\\\\nSolving the world’s problems through technology wouldn’t be possible without people with the right skills. See what it takes to become an IBMer, or build your skills with our educational courses.\\\\n\\\\nBecome an IBMer\\\\n\\\\nExplore jobs\\\\n\\\\nExplore learning opportunities\\\\n\\\\nStart learning\\\\n\\\\nFootnotes\\\\n\\\\n¹ Keep the data flowing. Keep the water flowing. IBM case study on Water Corporation, January 2024.\\\\n2 Accelerating software development with gen AI, IBM, 2024.\\\"}\"" }`

  

  



## Run a utility agent tool

This runs a utility agent tool given an input and optional configuration parameters.

Some tools can choose to tailor the response based on the access token identity.

```
POST /v1-beta/utility_agent_tools/run/{tool_id}
```





### Request

#### Path Parameters

- ##### tool_id

  Required*

  string

  Tool name

  **Possible values:** Value must match regular expression `[a-zA-Z0-9-]*`

#### Request Body

Required*

One of

Change Schema Parameter List

**Example:**



- ##### input

  Required*

  string

  Input to be used when running tool that has no input_schema.

  **Example:** `What was the weather in Toronto on January 13th 2025?`

- ##### tool_name

  string

  The name of the tool to be run.

  **Example:** `GoogleSearch`

- ##### config

  toolConfig

  

- `curl --request POST 'https://{cluster_url}/v1-beta/utility_agent_tools/run/RAGQuery' -H 'Authorization: Bearer eyJhbGciOiJSUzUxM...' -H 'Content-Type: application/json' --data-raw '{  "input": "What is a project?",  "config": {    "projectId": "d514c8ef-423f-429c-8947-fa900dee338a",    "vectorIndexId": "30964b43-f090-44a6-a379-4ab4c00498ca"  } }' `

  

  

### Response

#### Response Body

wxUtilityAgentToolsRunResponse

- ##### output

  Always included*

  The output from running the tool.

  **Example:** `[{"title":"Toronto, Ontario, Canada Monthly Weather | AccuWeather","description":"January. January February March April May June July August September October November December. 2025 ... 13°. 29. 37°. 18°. 30. 34°. 16°. 31. 36°. 18°. 1. 18°. 11 ...","url":"https://www.accuweather.com/en/ca/toronto/m5h/january-weather/55488"},{"title":"Canada weather forecast for Tuesday, 13 January 2026","description":"Weather in Canada during the last few years on January 13 ; 2025 - January 13, 32 ° / 26 °, 0 in ; 2024 - January 13, 39 ° / 26 °, 0.46 in ; 2023 - January 13, 32 ...","url":"https://www.weather25.com/north-america/canada?page=date&date=13-1"},{"title":"Toronto January 2025 Historical Weather Data (Ontario, Canada ...","description":"January 2025 Weather History in Toronto Ontario, Canada. The data for ... -SN, BR. Mon, Jan 13, Light Snow, Light Snow and Ice Pellets, Mist, Drifting ...","url":"https://weatherspark.com/h/m/19863/2025/1/Historical-Weather-in-January-2025-in-Toronto-Ontario-Canada"}]`

#### Status Code

- ##### 200

  OK - Returned when tool ran succesfully

- ##### 400

  Bad Request - Returned when the request parameters are invalid

- ##### 401

  Unauthorized - Returned when caller does not have a valid authorization token, or it is missing

Example responses

- Results of the RAGQuery tool.

  `{  "output": "Working in projects  A project is a collaborative workspace where you work with data and other assets to accomplish a particular goal.  By default, your sandbox project is created automatically when you sign up for watsonx.ai.  Your project can include these types of resources:   Collaborators are the people who you work with in your project.  Data assets are what you work with. Data assets often consist of raw data that you work with to refine.  Tools and their associated assets are how you work with\n\ndeployment spaces.  Projects and tools  Projects are where your data science and model builder teams work with data to create assets, such as, saved prompts, notebooks, models, or pipelines. Your first project, which is known as your sandbox project, is created automatically when you\n\nTask 2 . If you don't see any projects, then follow these steps to create a project. 1. Click Create a sandbox project . When the project is created, you will see the sandbox project in the Projects section. For more information or to watch a video, see Creating a project {: new_window}.\n\nTask 2 . If you don't see any projects, then follow these steps to create a project. 1. Click Create a sandbox project . When the project is created, you will see the sandbox project in the Projects section. For more information or to watch a video, see Creating a project {: new_window}.\n\ncharacters plus a unique identifier.  Watch this video to see how to create both an empty project, imported project, and a project from a sample.  This video provides a visual method to learn the concepts and tasks in this documentation.         Next steps   Add collaborators  Add data   Learn more   Object storage  Importing a project  Troubleshooting Cloud Object Storage for projects   Parent topic:  Projects\n\nis saved in the project. Many tasks include samples that you can use. You can find sample prompts, notebooks, data sets, and other assets in the Samples from the home page. You can share your work by adding collaborators to your project. If you need to work with data, you can add data assets to your project.  If your sandbox project is your only project, then any task that you select occurs in the context of your sandbox project. When you have multiple projects, you can change the default project\n\na project, you can add a short description to document the purpose or goal of the project. You can edit the description later, on the project's Settings page.  You can mark the project as sensitive. When users open a project that is marked as sensitive, a notification is displayed stating that no data assets can be downloaded or exported from the project.  The Overview page of a project contains a readme file where you can document the status or results of the project. The readme file uses standard\n\nproject.  Asset storage is where project information and files are stored.  Integrations are how you incorporate external tools.   You can customize projects to suit your goals. You can change the contents of your project and almost all of its properties at any time. However, you must make these choices when you create the project because you can't change them later:   The instance of IBM Cloud Object Storage to use for project storage.   You can view projects that you create and collaborate in by" }`

  

  