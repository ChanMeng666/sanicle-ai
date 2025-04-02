Quick start

A guide to make your first API request to infer text

![img](https://www.ibm.com/watsonx/developer/icons/api--key.svg)









```
const { WatsonXAI } = require('@ibm-cloud/watsonx-ai');

const watsonxAIService = WatsonXAI.newInstance();

const textGeneration = watsonxAIService.generateText( {
  input: 'How far is Paris from Bangalore?',
  modelId: 'ibm/granite-13b-instruct-v2',
  projectId: '{project_id}
);
```







# Quick start

## Make your first API request to watsonx.ai

Get started with your first API or SDK requests with watsonx.ai to generate responses from a prompt.

### 1. Visit Developer Access page

To begin using the API and SDK, you will need 3 values: a project or space id, an endpoint for your region, and an API key. You can visit the [Developer Access](https://dataplatform.cloud.ibm.com/developer-access?context=wx) page to receive these values. Make sure to also follow the link on the Developer Access page to get your IBM Cloud API key separately.

### 2. Start Building

CurlNode.jsPython

### 3. Install the SDK

Install the watsonx.ai Node.js SDK from `npm` by running the following command:

```sh
1npm install @ibm-cloud/watsonx-ai
```

### 4. Set your environment variables

Create a file and name it with the `.env` extension. Add the following code to the file and replace `{apikey}` with your API key.

```text
1WATSONX_AI_AUTH_TYPE=iam
2WATSONX_AI_APIKEY={apikey}
```

### 5. Make your first request

Add the following code to a new file called `example.js`. Replace `{watsonx_ai_url}` and `{project_id}` with your own values.

```js
1const { WatsonXAI } = require('@ibm-cloud/watsonx-ai');
2
3process.env.IBM_CREDENTIALS_FILE = './.env'; // Your file with the apikey
4
5const watsonxAIService = WatsonXAI.newInstance({
6  version: '2024-05-31',
7  serviceUrl: '{watsonx_ai_url}',
8});
9
10const params = {
11  input: 'How far is Paris from Bangalore?',
12  modelId: 'ibm/granite-13b-instruct-v2',
13  projectId: '{project_id}',
14  parameters: {
15    max_new_tokens: 100,
16  },
17};
18
19try {
20  const textGeneration = watsonxAIService.generateText(params).then((res) => {
21    console.log({ response: res.result.results[0].generated_text });
22  });
23} catch (err) {
24  console.warn(err);
25}
```

For more information and examples, see the [Node.js SDK documentation](https://ibm.github.io/watsonx-ai-node-sdk/).

## Next steps

Now that you successfully made a simple request with watsonx.ai, learn about other features and capabilities.

- Try your request against another foundation model by changing the `model_id` from `ibm/granite-13b-instruct-v2` to another ID. For information about how to find the model IDs, see [Models](https://www.ibm.com/watsonx/developer/get-started/models).
- Experiment with [Text generation](https://www.ibm.com/watsonx/developer/capabilities/text-generation/), [Chat](https://www.ibm.com/watsonx/developer/capabilities/chat/) or [Tool calling](https://www.ibm.com/watsonx/developer/capabilities/tool-calling/)







# Models

## Featured foundation models

### Granite

#### Provider: IBM

![img](https://www.ibm.com/watsonx/developer/icons/bee.svg)

![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

### Llama

#### Provider: Meta

![img](https://www.ibm.com/watsonx/developer/icons/model--tuned.svg)

![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

### Mistral AI

#### Provider: Mistral AI

![img](https://www.ibm.com/watsonx/developer/icons/model--tuned.svg)

![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

## Getting started

A collection of open source and IBM models are deployed in IBM watsonx.ai. You can interact with the deployed foundation models programmatically. Click on a provider to learn more about the supported models that IBM provides. The tables in the following sections give details on models IBM provides, including model ID, token limits, and pricing.

- ### AlLaM

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

  ### Code Llama

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

  ### Core42

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

  ### Elyza

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

  ### Google Flan

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

  ### IBM Granite

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

  ### Meta Llama

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

  ### Mistral AI

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

  ### mT0

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

- ### IBM Slate

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

  ### OpenSource NLP and CV Community

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

  ### Microsoft

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

- ### IBM Granite

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

- ### MS Macro

  ![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

## Overview

A collection of open source and IBM foundation models are deployed in IBM watsonx.ai. You can prompt the deployed foundation models programmatically.

To understand how the model provider, instruction tuning, token limits, and other factors can affect which model to choose, see [Choosing a foundation model](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-model-choose.html?context=wx&audience=wdp).

### Listing available models programmatically

You can use the List the available foundation models method to return all the foundation models, including Tech Preview models.

CurlPython

Replace `{token}` and `{watsonx_ai_url}` with values from your account.

```sh
1curl -X GET \
2-H "Authorization: Bearer {token}" \
3-H "Content-Type: application/json" \
4-H "Accept: application/json" \
5"{watsonx_ai_url}/ml/v1/foundation_model_specs?version=2024-05-31&tech_preview=true"
```

After you find the model you want to use, copy the Model ID.

### Supporting your use cases

To understand how models can address your use case, including information on model modalities, supported languages, tuning, and indemnification, see our product documentation on [choosing a model](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-model-choose.html?context=wx&audience=wdp).

Some IBM foundation models are also available from Hugging Face. License terms for IBM models that you access from Hugging Face are available from the Hugging Face website. For more information about contractual protections related to IBM indemnification for IBM foundation models that you access in watsonx.ai, see the [IBM Client Relationship Agreement](https://www.ibm.com/support/customer/csol/terms/?id=Z126-6548&cc=us&lc=en) and [IBM watsonx.ai service description](https://www.ibm.com/support/customer/csol/terms/?id=i126-6883).

### Supported API functionality by model

| Model                         | Text Generation | Chat Completion | Tool Calling | Vision |
| :---------------------------- | :-------------- | :-------------- | :----------- | :----- |
| granite-2b-instruct           | ✅               | ✅               |              |        |
| granite-8b-instruct           | ✅               | ✅               | ✅            |        |
| granite-13b-instruct-v2       | ✅               |                 |              |        |
| granite-20b-code-instruct     | ✅               | ✅               |              |        |
| granite-34b-code-instruct     | ✅               | ✅               |              |        |
| granite-3b-code-instruct      | ✅               |                 |              |        |
| granite-8b-code-instruct      | ✅               |                 |              |        |
| llama-3-1-70b-instruct        | ✅               | ✅               | ✅            |        |
| llama-3-1-8b-instruct         | ✅               | ✅               | ✅            |        |
| llama-3-2-11b-vision-instruct |                 | ✅               | ✅            | ✅      |
| llama-3-2-1b-instruct         | ✅               | ✅               | ✅            |        |
| llama-3-2-3b-instruct         | ✅               | ✅               |              |        |
| llama-3-2-90b-vision-instruct |                 | ✅               | ✅            | ✅      |
| llama-3-8b-instruct           | ✅               | ✅               |              |        |
| llama-3-70b-instruct          | ✅               | ✅               |              |        |
| llama-3-405b-instruct         | ✅               | ✅               | ✅            |        |
| llama-guard-3-11b-vision      |                 | ✅               |              | ✅      |
| mistral-small                 | ✅               | ✅               | ✅            |        |
| mistral-large                 | ✅               | ✅               | ✅            |        |
| mixtral-8x7b-instruct-v01     | ✅               |                 |              |        |
| pixtral-12b                   |                 | ✅               |              | ✅      |

## IBM foundation models

### IBM Granite

| Model Name                                                   | Model ID                        | Max Tokens (input + output) | Input price (USD/1,000 tokens) | Output price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :------------------------------ | :-------------------------- | :----------------------------- | :------------------------------ |
| [granite-13b-chat-v2](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-13b-chat) (Deprecated) | `ibm/granite-13b-chat-v2`       | 8,192                       | $0.0006                        | $0.0006                         |
| [granite-13b-instruct-v2](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-13b-instruct) | `ibm/granite-13b-instruct-v2`   | 8,192                       | $0.0006                        | $0.0006                         |
| [granite-7b-lab](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-7b-lab) (Deprecated) | `ibm/granite-7b-lab`            | 8,192                       | $0.0006                        | $0.0006                         |
| [granite-8b-japanese](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-8b-japanese) | `ibm/granite-8b-japanese`       | 8,192                       | $0.0006                        | $0.0006                         |
| [granite-20b-multilingual](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-20b-multilingual) | `ibm/granite-20b-multilingual`  | 8,192                       | $0.0006                        | $0.0006                         |
| [granite-3-2b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-20b-multilingual) | `ibm/granite-3-2b-instruct`     | 8,192                       | $0.0001                        | $0.0001                         |
| [granite-3-8b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-20b-multilingual) | `ibm/granite-3-8b-instruct`     | 8,192                       | $0.0002                        | $0.0002                         |
| [granite-guardian-3-2b](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-20b-multilingual) | `ibm/granite-guardian-3-2b`     | 8,192                       | $0.0001                        | $0.0001                         |
| [granite-guardian-3-8b](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-20b-multilingual) | `ibm/granite-guardian-3-8b`     | 8,192                       | $0.0002                        | $0.0002                         |
| [granite-3b-code-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-code-instruct-models) | `ibm/granite-3b-code-instruct`  | 128,000                     | $0.0006                        | $0.0006                         |
| [granite-8b-code-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-code-instruct-models) | `ibm/granite-8b-code-instruct`  | 128,000                     | $0.0006                        | $0.0006                         |
| [granite-20b-code-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-code-instruct-models) | `ibm/granite-20b-code-instruct` | 8,192                       | $0.0006                        | $0.0006                         |
| [granite-34b-code-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#granite-code-instruct-models) | `ibm/granite-34b-code-instruct` | 8,192                       | $0.0006                        | $0.0006                         |

## Third Party Foundation Models

### SDAIA ALLaM

| Model Name                                                   | Model ID                     | Max Tokens (input + output) | Input price (USD/1,000 tokens) | Output price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :--------------------------- | :-------------------------- | :----------------------------- | :------------------------------ |
| [allam-1-13b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#allam-1-13b-instruct) | `sdaia/allam-1-13b-instruct` | 4,096                       | $0.0018                        | $0.0018                         |

### Code Llama

| Model Name                                                   | Model ID                              | Max Tokens (input + output) | Input price (USD/1,000 tokens) | Output price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :------------------------------------ | :-------------------------- | :----------------------------- | :------------------------------ |
| [codellama-34b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#codellama-34b-instruct) | `codellama/codellama-34b-instruct-hf` | 16,384                      | $0.0018                        | $0.0018                         |

### Core 42

| Model Name                                                   | Model ID               | Max Tokens (input + output) | Input price (USD/1,000 tokens) | Output price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :--------------------- | :-------------------------- | :----------------------------- | :------------------------------ |
| [jais-13b-chat](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#jais-13b-chat) | `core42/jais-13b-chat` | 2,048                       | $0.0018                        | $0.0018                         |

### Elyza

| Model Name                                                   | Model ID                                   | Max Tokens (input + output) | Input price (USD/1,000 tokens) | Output price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :----------------------------------------- | :-------------------------- | :----------------------------- | :------------------------------ |
| [elyza-japanese-llama-2-7b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#elyza-llama2-7b-instruct) | `elyza/elyza-japanese-llama-2-7b-instruct` | 4,096                       | $0.0018                        | $0.0018                         |

### Google Flan

| Model Name                                                   | Model ID             | Max Tokens (input + output) | Input price (USD/1,000 tokens) | Output price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :------------------- | :-------------------------- | :----------------------------- | :------------------------------ |
| [flan-t5-xl-3b](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#flan-t5-xl-3b) | `google/flan-t5-xl`  | 4,096                       | $0.0006                        | $0.0006                         |
| [flan-t5-xxl-11b](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#flan-t5-xxl-11b) | `google/flan-t5-xxl` | 4,096                       | $0.0018                        | $0.0018                         |
| [flan-ul2-20b](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#flan-ul2-20b) | `google/flan-ul2`    | 4,096                       | $0.0050                        | $0.0050                         |

### Meta Llama

| Model Name                                                   | Model ID                                   | Max Tokens (input + output) | Input price (USD/1,000 tokens) | Output price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :----------------------------------------- | :-------------------------- | :----------------------------- | :------------------------------ |
| [llama-3-2-1b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-3-2) | `meta-llama/llama-3-2-1b-instruct`         | 131,072                     | $0.0001                        | $0.0001                         |
| [llama-3-2-3b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-3-2) | `meta-llama/llama-3-2-3b-instruct`         | 131,072                     | $0.00015                       | $0.00015                        |
| [llama-3-2-11B-vision-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-3-2-vision) | `meta-llama/llama-3-2-11b-vision-instruct` | 131,072                     | $0.00035                       | $0.00035                        |
| [llama-3-2-90B-vision-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-3-2-vision) | `meta-llama/llama-3-2-90b-vision-instruct` | 131,072                     | $0.0020                        | $0.0020                         |
| [llama-guard-3-11B-vision-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-3-2-guard) | `meta-llama/llama-guard-3-11b-vision`      | 131,072                     | $0.00035                       | $0.00035                        |
| [llama3-llava-next-8b-hf](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama3-llava) (Deprecated) | `meta-llama/llama3-llava-next-8b-hf`       | 8,192                       | $0.0006                        | $0.0006                         |
| [llama-3-1-8b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-3-1) | `meta-llama/llama-3-1-8b-instruct`         | 131,072                     | $0.0006                        | $0.0006                         |
| [llama-3-1-70b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-3-1) | `meta-llama/llama-3-1-70b-instruct`        | 131,072                     | $0.0018                        | $0.0018                         |
| [llama-3-405b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-3-1) | `meta-llama/llama-3-405b-instruct`         | 16,384                      | $0.0050                        | $0.016                          |
| [llama-3-8b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-3) | `meta-llama/llama-3-8b-instruct`           | 8,192                       | $0.0006                        | $0.0006                         |
| [llama-3-70b-instruct](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-3) | `meta-llama/llama-3-70b-instruct`          | 8,192                       | $0.0018                        | $0.0018                         |
| [llama-2-13b-chat](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama-2) (Deprecated) | `meta-llama/llama-2-13b-chat`              | 4,096                       | $0.0006                        | $0.0006                         |
| [llama2-13b-dpo-v7](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#llama2-13b-dpo-v7) | `mnci/llama2-13b-dpo-v7`                   | 4,096                       | $0.0018                        | $0.0018                         |

### Mistral

| Model Name                                                   | Model ID                                    | Max Tokens (input + output) | Input price (USD/1,000 tokens) | Output price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :------------------------------------------ | :-------------------------- | :----------------------------- | :------------------------------ |
| mistral-small                                                | `mistralai/mistral-small-24b-instruct-2501` | 32,768                      | $0.00035                       | $0.00035                        |
| [mistral-large](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#mistral-large) | `mistralai/mistral-large`                   | 32,768                      | $0.01                          | $0.01                           |
| [mixtral-8x7b-instruct-v01](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#mixtral-8x7b-instruct-v01) | `mistralai/mixtral-8x7b-instruct-v01`       | 32,768                      | $0.0006                        | $0.0006                         |

### Big Science mT0

| Model Name                                                   | Model ID             | Max Tokens (input + output) | Input price (USD/1,000 tokens) | Output price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :------------------- | :-------------------------- | :----------------------------- | :------------------------------ |
| [mt0-xxl-13b](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp#mt0-xxl-13b) | `bigscience/mt0-xxl` | 4,096                       | $0.0018                        | $0.0018                         |

## IBM Embedding Models

### IBM Slate

| Model name                                                   | Model ID                          | Max input tokens | Number of dimensions | Price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :-------------------------------- | :--------------- | :------------------- | :----------------------- |
| [slate-125m-english-rtrvr-v2](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp#slate-125m-english-rtrvr) | `ibm/slate-125m-english-rtrvr-v2` | 512              | 768                  | $0.0001                  |
| [slate-125m-english-rtrvr](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp#slate-125m-english-rtrvr) | `ibm/slate-125m-english-rtrvr`    | 512              | 768                  | $0.0001                  |
| [slate-30m-english-rtrvr-v2](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp#slate-30m-english-rtrvr) | `ibm/slate-30m-english-rtrvr-v2`  | 512              | 384                  | $0.0001                  |
| [slate-30m-english-rtrvr](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp#slate-30m-english-rtrvr) | `ibm/slate-30m-english-rtrvr`     | 512              | 384                  | $0.0001                  |

## Third Party Embedding Models

### Sentence Transformers

| Model name                                                   | Model ID                                  | Provider                                                     | Max input tokens | Number of dimensions | Price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :---------------------------------------- | :----------------------------------------------------------- | :--------------- | :------------------- | :----------------------- |
| [all-minilm-l12-v2](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp#all-minilm-l12-v2) | `sentence-transformers/all-minilm-l12-v2` | Open Source Natural Language Processing and Computer Vision community | 256              | 384                  | $0.0001                  |

### Multilingual E5

| Model name                                                   | Model ID                         | Provider  | Max input tokens | Number of dimensions | Price (USD/1,000 tokens) |
| :----------------------------------------------------------- | :------------------------------- | :-------- | :--------------- | :------------------- | :----------------------- |
| [multilingual-e5-large](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp#multilingual-e5-large) | `intfloat/multilingual-e5-large` | Microsoft | 512              | 1,024                | $0.0001                  |

## IBM Time Series Models

### IBM Granite Time Series

| Model Name             | Model ID                     | Max Data Points (input + output) | Input price (USD/1,000 data points) | Output price (USD/1,000 data points) |
| :--------------------- | :--------------------------- | :------------------------------- | :---------------------------------- | :----------------------------------- |
| granite-ttm-512-96-r2  | `ibm/granite-ttm-512-96-r2`  | 608                              | $0.13                               | $0.38                                |
| granite-ttm-1024-96-r2 | `ibm/granite-ttm-1024-96-r2` | 1120                             | $0.13                               | $0.38                                |
| granite-ttm-1536-96-r2 | `ibm/granite-ttm-1536-96-r2` | 1536                             | $0.13                               | $0.38                                |

*Note: The max data points limit for timeseries models is per combination of a channel and ID for multivariate forecasting, meaning the model can process a combination of # of channels X # of IDs # Max Data Points*

## Third Party Re-rank Models

### MS Marco

| Model name              | Model ID                                | Maximum documents | Price (USD/1,000 tokens) |
| :---------------------- | :-------------------------------------- | :---------------- | :----------------------- |
| ms-marco-MiniLM-L-12-v2 | `cross-encoder/ms-marco-MiniLM-L-12-v2` | 50                | $0.000005                |







# Libraries

### LangChain

![img](https://www.ibm.com/watsonx/developer/icons/third-party.svg)

![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

### LangGraph

![img](https://www.ibm.com/watsonx/developer/icons/third-party.svg)

![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

### LlamaIndex

![img](https://www.ibm.com/watsonx/developer/icons/third-party.svg)

![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

### CrewAI

![img](https://www.ibm.com/watsonx/developer/icons/third-party.svg)

![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

### watsonx.ai Flows Engine

![img](https://www.ibm.com/watsonx/developer/icons/bee.svg)

![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

### watsonx.ai Python SDK

![img](https://www.ibm.com/watsonx/developer/icons/bee.svg)

![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

### watsonx.ai Node.js SDK

![img](https://www.ibm.com/watsonx/developer/icons/bee.svg)

![img](https://www.ibm.com/watsonx/developer/icons/arrow--right.svg)

## Overview

Use these (open source) libraries to build AI applications on watsonx.ai.

### LangChain

LangChain is a framework that enables the development of applications that are powered by language models and provides tools to integrate data sources, model configurations, and workflows. The framework is available for both Python and JavaScript, and is compatible with watsonx.ai API endpoints.

Follow these tutorials to learn how to use LangChain with watsonx:

- [Create a LangChain AI Agent in Python using watsonx](https://developer.ibm.com/tutorials/awb-create-langchain-ai-agent-python-watsonx)
- [Create a LangChain RAG system in Python with watsonx](https://developer.ibm.com/tutorials/awb-create-langchain-rag-system-python-watsonx/?mhsrc=ibmsearch_a&mhq=langchain)

Documentation:

- [Python Docs](https://python.langchain.com/docs/integrations/llms/ibm_watsonx/#calling-the-model-directly)
- [JS Docs](https://js.langchain.com/docs/integrations/llms/watsonx_ai/)

### LangGraph

LangGraph is a framework for building stateful, multi-actor applications by combining language model outputs with structured graph data to create agent and multi-agent workflows; these workflows are then represented with graphs.

Follow these tutorials to learn how to use LangGraph with watsonx:

- [Build a RAG agent to answer complex questions](https://developer.ibm.com/tutorials/awb-build-rag-llm-agents/)

### LlamaIndex

LlamaIndex (formerly GPT Index) is a tool that helps structure, index, and query external data sources using language models, making it easier to build and interact with custom knowledge bases.

Follow these tutorials to learn how to use LlamaIndex with watsonx:

- [Use watsonx.ai with LlamaIndex to build RAG applications](https://community.ibm.com/community/user/watsonx/blogs/elena-lowery/2024/05/28/use-watsonxai-with-llamaindex-to-build-rag-applica)
- [Use watsonx and LlamaIndex for Text-to-SQL task](https://github.com/IBM/watson-machine-learning-samples/blob/master/cloud/notebooks/python_sdk/deployments/foundation_models/Use watsonx%2C and LlamaIndex with sql querey engine.ipynb)

Documentation:

- [LlamaIndex Docs](https://docs.llamaindex.ai/en/stable/examples/llm/ibm_watsonx/)

### CrewAI

CrewAI is a multi-agent framework that enables autonomous AI agents to collaborate effectively in completing complex tasks through role-based design and coordinated workflows.

#### 1. Install dependencies

Install the main CrewAI package with the following command:

```sh
1pip install crewai
```

#### 2. Create your crew

To create a new CrewAI project, run the following CLI (Command Line Interface) command:

```sh
1crewai create crew my_project
```

#### 3. Update environment variables

Update the `.env` file with the model, watsonx.ai base URL, watsonx.ai API key and watsonx.ai project ID.

- Make sure to use a model that is [suitable for tool calling](https://www.ibm.com/watsonx/developer/capabilities/tool-calling).
- You can find your credentials within the [Developer Access](https://dataplatform.cloud.ibm.com/developer-access?context=wx) page.

*Example:*

```env
1MODEL=watsonx/ibm/granite-3-8b-instruct
2WATSONX_URL=https://{region}.cloud.ibm.com
3WATSONX_APIKEY=your-api-key
4WATSONX_PROJECT_ID=your-project-id
```

**4. Run your crew**

Navigate to your project directory:

```sh
1cd my_project
```

To run your crew, execute the following command in the root of your project:

```sh
1crewai run
```

#### 5. Customize your crew

Learn more about how to customize your crew within the [CrewAI documentation](https://docs.crewai.com/introduction).

### Flows Engine

watsonx.ai Flows Engine is a tool that enables developers to build, customize, and deploy generative AI applications by integrating large language models (LLMs) with enterprise data through an intuitive flow language and pre-built AI workflows.

Follow these tutorials to learn how to use Flows Engine with watsonx:

- [Build a RAG application with watsonx.ai Flows Engine](https://developer.ibm.com/tutorials/awb-build-rag-application-watsonx-ai-flows-engine/)
- [Build a web page summarization tool using watsonx.ai Flows Engine](https://developer.ibm.com/tutorials/awb-build-web-page-summarization-tool-watsonx-ai-flows-engine/)
- [Use IBM Granite LLMs in watsonx.ai Flows Engine](https://developer.ibm.com/tutorials/awb-using-ibm-granite-llms-in-watsonx-ai-flows-engine/)
- [Implement LLM guardrails for RAG applications](https://developer.ibm.com/tutorials/awb-how-to-implement-llm-guardrails-for-rag-applications/)

Documentation:

- [Flows Engine Docs](https://wxflows.ibm.stepzen.com/docs/learn/watsonx-ai)
- [Flows Engine GitHub](https://github.com/IBM/wxflows)

### Python SDK

The IBM watsonx.ai Python SDK enables developers to train, deploy, and integrate AI models with their applications using various APIs. The SDK supports tasks, such as model scoring, and integrates with IBM watsonx.ai services.

Documentation:

- [watsonx.ai Python SDK Docs](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-python-lib.html?context=wx&audience=wdp)
- [watsonx.ai Python SDK GitHub](https://ibm.github.io/watsonx-ai-python-sdk)

### Node.js SDK

The IBM watsonx.ai Node.js SDK enables developers to create and deploy generative AI applications by providing programmatic access to the IBM watsonx.ai service with various API calls and authentication options.

Documentation:

- [watsonx.ai Python Node.js Docs](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-node-sdk.html?context=wx&audience=wdp)
- [watsonx.ai Python Node.js SDK GitHub](https://ibm.github.io/watsonx-ai-node-sdk/)









# Chat

## Overview

The watsonx.ai chat API & SDK provides ways to interact with foundation models in a conversational format. It allows you to recognize different types of messages, such as system prompts, user inputs, and responses from the foundation model, including follow-up questions and answers. You can use the chat API to recreate the experience of interacting with a foundation model, just like you would in the Prompt Lab’s chat mode.

Not all the available foundation models can be used with the chat API to create a conversational workflow. For information about the full set of supported IBM and third-party foundation models, see [Models](https://www.ibm.com/watsonx/developer/get-started/models).

These models support conversational tasks and can help you integrate foundation models into your applications using the watsonx.ai API & SDK.

## Example

You can generate text by sending a structured list of messages by prompting foundation models programmatically with the API or SDKs.

The following example show a chat interaction discussing the distance between Paris and Bangalore. The example uses the `meta-llama/llama-3-8b-instruct` foundation model, which works well with text generation and also supports [tool calling](https://www.ibm.com/watsonx/developer/capabilities/tool-calling).

CurlNode.jsPython

Replace `{watsonx_ai_url}` and `{project_id}` with your information. The value for `{apikey}` is defined in the `.env` file, see the [quick start](https://www.ibm.com/watsonx/developer/get-started/quick-start) page for more information on installing and configuring the Node.jsd SDK.

```js
1const { WatsonXAI } = require('@ibm-cloud/watsonx-ai');
2
3process.env.IBM_CREDENTIALS_FILE = './.env'; // Your file with the apikey
4
5const watsonxAIService = WatsonXAI.newInstance({
6  version: '2024-05-31',
7  serviceUrl: '{watsonx_ai_url}',
8});
9
10const params = {
11  modelId: 'meta-llama/llama-3-8b-instruct',
12  projectId: '{project_id}',
13  maxTokens: 100,
14};
15
16const messages = [
17  {
18    role: 'system',
19    content: 'You are a helpful assistant.',
20  },
21  {
22    role: 'user',
23    content: [
24      {
25        type: 'text',
26        text: 'How far is Paris from Bangalore?',
27      },
28    ],
29  },
30  {
31    role: 'assistant',
32    content:
33      'The distance between Paris, France, and Bangalore, India, is approximately 7,800 kilometers (4,850 miles)',
34  },
35  {
36    role: 'user',
37    content: [
38      {
39        type: 'text',
40        text: 'What is the flight distance?',
41      },
42    ],
43  },
44];
45
46try {
47  watsonxAIService
48    .textChat({ messages, ...params })
49    .then(async ({ result }) => {
50      console.log({ response: result.choices?.[0].message });
51    });
52} catch (err) {
53  console.warn(err);
54}
```

For more information and examples, see the [Node.js SDK documentation](https://ibm.github.io/watsonx-ai-node-sdk/).

The response will include the flight distance between Paris and Bangalore, including any relevant meta data.

## Streaming

You can also enable streaming when using the SDK for Node.js or Python.

Node.jsPython

```js
1try {
2  watsonxAIService.generateTextStream(params).then(async (res) => {
3    for await (const line of res) {
4      console.log(line);
5    }
6  });
7} catch (err) {
8  console.warn(err);
9}
```









# Tool calling

## Overview

Tool calling enables a chat model to respond to a given prompt by invoking an (external) tool. When using watsonx.ai you can use the API or SDKs with supported chat models, and pass a list of tools from which the model will suggest what tool to use to answer your question.

Here are the foundation models that you can use with the chat API in conjunction with tool calling:

- `ibm/granite-3-8b-instruct`
- `meta-llama/llama-3-3-70b-instruct`
- `meta-llama/llama-3-2-1b-instruct`
- `meta-llama/llama-3-2-3b-instruct`
- `meta-llama/llama-3-2-11b-vision-instruct`
- `meta-llama/llama-3-2-90b-vision-instruct`
- `meta-llama/llama-guard-3-11b-vision-instruct`
- `mistralai/mistral-large`

Support for tool calling will be added to more models over time.

## Example

You can generate text by sending a structured list of messages, together with a list of tools.

The following example uses the `mistralai/mistral-large` foundation model, which works well with text generation and also supports [tool calling](https://www.ibm.com/watsonx/developer/capabilities/tool-calling). The model is given a single tool called `add`, and a message with the question “What is 2 plus 4?“. The response of the model will be a new message containing the tool that should be called, including the method of calling that tool.

CurlNode.jsPython

Replace `{token}`, `{watsonx_ai_url}`, and `{project_id}` with your information.

```sh
1curl -X POST \
2-H "Authorization: Bearer {token}" \
3-H "Content-Type: application/json" \
4"{watsonx_ai_url}/ml/v1/text/chat?version=2024-05-31" \
5--data-raw '{
6    "model_id": "mistralai/mistral-large",
7    "project_id": "{project_id}",
8    "messages": [{
9        "role": "user",
10        "content": [{
11            "type": "text",
12            "text": "What is 2 plus 4?"
13        }]
14    }],
15    "tools": [{
16        "type": "function",
17        "function": {
18            "name": "add",
19            "description": "Adds the values a and b to get a sum.",
20            "parameters": {
21                "type": "object",
22                "properties": {
23                    "a": {
24                        "description": "A number value",
25                        "type": "number"
26                    },
27                    "b": {
28                        "description": "A number value",
29                        "type": "number"
30                    }
31                },
32                "required": [
33                    "a",
34                    "b"
35                ]
36            }
37        }
38    }],
39    "tool_choice_option": "auto",
40    "max_tokens": 300,
41    "time_limit": 1000
42  }'
```

For more information and examples, see the [API reference](https://cloud.ibm.com/apidocs/watsonx-ai#text-chat).

The response of the model will look something like the following JSON:

```json
1{
2  "id": "chat-a00942a130e84f83bc0090c38c2f419f",
3  "model_id": "mistralai/mistral-large",
4  "choices": [
5    {
6      "index": 0,
7      "message": {
8        "role": "assistant",
9        "tool_calls": [
10          {
11            "id": "chatcmpl-tool-77cbe4e94d88489383a0c6ed1b644674",
12            "type": "function",
13            "function": {
14              "name": "add",
15              "arguments": "{\"a\": 2, \"b\": 4}"
16            }
17          }
18        ]
19      },
20      "finish_reason": "tool_calls"
21    }
22  ]
23}
```

You would then have to call a function called `add` with the arguments `{a: 2, b: 4}`. The function returns the sum of the two numbers, which is 6. This value has to be passed back to the model as part of the next message, together with the tool call identifier. The `message` object should look something like this:

```json
1[
2  {
3    "role": "user",
4    "content": [
5      {
6        "type": "text",
7        "text": "What is 2 plus 4?"
8      }
9    ]
10  },
11  {
12    "role": "assistant",
13    "tool_calls": [
14      {
15        "id": "chatcmpl-tool-77cbe4e94d88489383a0c6ed1b644674",
16        "type": "function",
17        "function": {
18          "name": "add",
19          "arguments": "{\"a\": 2, \"b\": 4}"
20        }
21      }
22    ]
23  },
24  {
25    "role": "tool",
26    "tool_call_id": "chatcmpl-tool-77cbe4e94d88489383a0c6ed1b644674",
27    "content": [
28      {
29        "type": "text",
30        "text": "6"
31      }
32    ]
33  }
34]
```

The model will respond with a natural language answer that includes the response of the tool call.





# Text generation

## Overview

Text generation is the process of automatically producing coherent and meaningful text, which can be in the form of sentences, paragraphs, or even entire documents. The goal is to create text that is not only grammatically correct but also contextually appropriate and engaging for the intended audience.

Text generation is a versatile capability with a wide range of applications in various domains. The following example applications are good areas for text generation:

- Blog posts and articles
- News articles and reports
- Social media posts
- Product descriptions and reviews
- Creative writing
- Language translation
- Text summaries
- Virtual assistant interactions
- Storytelling and narrative generation

## Example

You can generate text in IBM watsonx.ai by prompting foundation models programmatically with the API or SDKs.

The following example uses the `ibm/granite-13b-instruct-v2` foundation model, which works well with text generation. For information about the full set of supported IBM and third-party foundation models, see [Models](https://www.ibm.com/watsonx/developer/get-started/models).

CurlNode.jsPython

Replace `{watsonx_ai_url}` and `{project_id}` with your information. The value for `{apikey}` is defined in the `.env` file, see the [quick start](https://www.ibm.com/watsonx/developer/get-started/quick-start) page for more information on installing and configuring the Node.jsd SDK.

```js
1const { WatsonXAI } = require('@ibm-cloud/watsonx-ai');
2
3process.env.IBM_CREDENTIALS_FILE = './.env'; // Your file with the apikey
4
5const watsonxAIService = WatsonXAI.newInstance({
6  version: '2024-05-31',
7  serviceUrl: '{watsonx_ai_url}',
8});
9
10const params = {
11  input: 'How far is Paris from Bangalore?',
12  modelId: 'ibm/granite-13b-instruct-v2',
13  projectId: '{project_id}',
14  parameters: {
15    max_new_tokens: 100,
16    decoding_method: 'greedy',
17  },
18};
19
20try {
21  const textGeneration = watsonxAIService.generateText(params).then((res) => {
22    console.log({ response: res.result.results[0].generated_text });
23  });
24} catch (err) {
25  console.warn(err);
26}
```

For more information and examples, see the [Node.js SDK documentation](https://ibm.github.io/watsonx-ai-node-sdk/).

## Streaming

You can also enable streaming when using the SDK for Node.js or Python.

Node.jsPython

```js
1try {
2  const textGenerationStream = watsonxAIService
3    .generateTextStream(params)
4    .then(async (res) => {
5      console.log(res);
6
7      for await (const line of res) {
8        console.log(line);
9      }
10    });
11} catch (err) {
12  console.warn(err);
13}
```

## Removing harmful content

To enable the filters with default settings applied when you use the Python library, include the following parameter in the request:

```python
1response = model.generate(prompt,guardrails=True)
```

The following code example shows how to enable and configure the filters.

```python
1guardrails_hap_params = {
2  GenTextModerationsMetaNames.INPUT: False,
3  GenTextModerationsMetaNames.THRESHOLD: 0.45
4}
5guardrails_pii_params = {
6  GenTextModerationsMetaNames.INPUT: False,
7  GenTextModerationsMetaNames.OUTPUT: True,
8  GenTextModerationsMetaNames.MASK: {"remove_entity_value": True}
9}
10
11response = model.generate(prompt,
12  guardrails=True,
13  guardrails_hap_params=guardrails_hap_params,
14  guardrails_pii_params=guardrails_pii_params)
```







# Time Series Forecasting

## Overview

Time series data often holds valuable information to understand the past and better predict the future. For predictive (forecasting) use cases, time series foundation models can provide immense value in generating data for predictive analytics. Typically, time series foundation models are pre-trained on large amounts of time series data to power their forecasting capabilities. Additionally, some models can be further trained on your specific data to improve results.

## Example

IBM watsonx.ai Time series Forecasting API and SDK aims to provide developers with advanced forecasting capabilities, built on the Granite Time series models. IBM’s Granite time series models (TinyTimeMixers), a family of pre-trained, lightweight models based on a novel architecture. Granite time series models are ideal for forecasting use cases involving IoT sensor data, stock market prices, energy demand, and other datasets with smaller time intervals. The models dynamically adjust to data irregularities, seasonality, and trends, allowing for zero-shot forecasting.

Granite time series models currently support multiple input context lengths (512, 1024, and 1536 data points), and are capable of multi-variate, multi-time series predictions across a number of channels and IDs. Please refer to the [documentation](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-api-time-series.html?context=wx&locale=en&audience=wdp) for more details.

The following example uses the time series foundation models to forecast energy demand. The purpose of this example is to show core functionality of features available in Time Series Foundation Models.

Python

### 1. Visit Developer Access page

To begin using the API and SDK, you will need 3 values: a project or space id, an endpoint for your region, and an API key. You can visit the [Developer Access](https://dataplatform.cloud.ibm.com/developer-access?context=wx) page to receive these values. Make sure to also follow the link on the Developer Access page to get your IBM Cloud API key separately.

### 2. Set up your environment

Create a watsonx.ai Runtime Service instance (a free plan is offered, and information about how to create the instance can be found in the documentation).

Install and import the package `ibm-watsonx-ai` and dependecies:

```python
1!pip install wget | tail -n 1
2!pip install -U matplotlib | tail -n 1
3!pip install -U ibm-watsonx-ai | tail -n 1
```

*Note: The full documentation for `ibm-watsonx-ai` can be found [here](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-python-lib.html?context=wx).*

### 3. Interact with training dataset

This example uses the [hourly energy demand dataset](https://github.com/IBM/watson-machine-learning-samples/raw/refs/heads/master/cloud/data/energy/energy_dataset.csv) to train the time series model. For simplicity, the dataset was prepared to have no missing values and irrelevant columns.

#### Import the dataset

The following commands will import the dataset and read it as a csv.

```python
1import os, wget
2import pandas as pd
3
4filename = 'energy_dataset.csv'
5base_url = 'https://github.com/IBM/watson-machine-learning-samples/raw/refs/heads/master/cloud/data/energy/'
6
7if not os.path.isfile(filename): wget.download(base_url + filename)
8
9df = pd.read_csv(filename)
```

To get more information about the dataset, execute:

```python
1df.describe() # Describe the data
2
3df.tail() # Show the last few rows of the dataset
```

#### Split the data

The selected model `ibm/granite-ttm-512-96-r2` accepts only a 512 input length. The dataset will be split into a historical dataset containing 512 rows, and the next 96 lines will be used to check the consistency of the predictions.

To split the data:

```python
1timestamp_column = "time"
2target_column = "total load actual"
3context_length = 608
4future_context = 96
5
6# Only use the last `context_length` rows for prediction.
7future_data = df.iloc[-future_context:,]
8data = df.iloc[-context_length:-future_context,]
```

#### Visualize the data

You can visualize the data using the following code:

```python
1import matplotlib.pyplot as plt
2import numpy as np
3
4plt.figure(figsize=(10,2))
5plt.plot(np.asarray(data[timestamp_column], 'datetime64[s]'), data[target_column])
6plt.title("Actual Total Load")
7plt.show()
```

### 4. Use with Time Series Foundation Models in watsonx.ai

To use this dataset with available Time Series Foundation Models in watsonx.ai follow these instructions:

#### List available models

You can list the available models as follows:

```python
1for model in client.foundation_models.get_time_series_model_specs()["resources"]:
2    print('--------------------------------------------------')
3    print(f'model_id: {model["model_id"]}')
4    print(f'functions: {model["functions"]}')
5    print(f'long_description: {model["long_description"]}')
6    print(f'label: {model["label"]}')
```

#### Defining model

Specify the `model_id` that will be used for inferencing:

```python
1ts_model_id = client.foundation_models.TimeSeriesModels.GRANITE_TTM_512_96_R2
```

#### Initialize the TSModelInference class.

`TSModelInference` is a wrapper around watsonx.ai models that provides integration for the models.

```python
1from ibm_watsonx_ai.foundation_models import TSModelInference
2
3ts_model = TSModelInference(
4    model_id=ts_model_id,
5    api_client=client
6)
```

#### Defining the model parameters

Provide a set of model parameters that will influence the result:

```python
1from ibm_watsonx_ai.foundation_models.schema import TSForecastParameters
2
3forecasting_params = TSForecastParameters(
4    timestamp_column=timestamp_column,
5    freq="1h",
6    target_columns=[target_column],
7)
```

#### Forecasting

Call the `forecast()` method to predict electricity usage.

```python
1results = ts_model.forecast(data=data, params=forecasting_params)['results'][0]
```

#### Plot predictions along with the historical data

And to compare historical data with the predications by plotting it visually:

```python
1plt.figure(figsize=(10,2))
2plt.plot(np.asarray(data[timestamp_column], dtype='datetime64[s]'), data[target_column], label="Historical data")
3plt.plot(np.asarray(results[timestamp_column], dtype='datetime64[s]'), results[target_column], label="Predicted")
4plt.plot(np.asarray(future_data[timestamp_column], dtype='datetime64[s]'), future_data[target_column], label="True", linestyle='dashed')
5plt.legend(loc='center left', bbox_to_anchor=(1, 0.5))
6plt.show()
```

## Next steps

Now that you have successfully made a simple request with watsonx.ai Timeseries API/SDK, learn about other features and capabilities of the product.

Experiment with incorporating the timeseries capabilities with [Text generation](https://www.ibm.com/watsonx/developer/capabilities/text-generation/), [Chat](https://www.ibm.com/watsonx/developer/capabilities/chat/) or [Tool calling](https://www.ibm.com/watsonx/developer/capabilities/tool-calling/) to create an end-to-end solution.







# Re-ranking

## Overview

Re-ranking is the process of taking an initial set of retrieved documents or search results and reordering them to improve their relevance to a given query. Cross-encoders are models specifically designed for this task, processing the query and each document together to produce highly accurate relevance scores.

Re-ranking with cross-encoders is particularly useful in various information retrieval applications:

- Search result optimization
- Question answering systems
- Content recommendation
- Document retrieval
- Semantic matching
- Information filtering
- Candidate selection in recruiting
- Product search refinement

## Example

You can perform re-ranking in IBM watsonx.ai by using cross-encoder models through the API or SDKs. Make sure to use a [suitable cross-encoding model](https://www.ibm.com/watsonx/developer/capabilities/tool-calling).

**1. Create an access token**

Create an `{access_token}` by making a request to the IAM Identity Services API with your `{api_key}`.

— You can access your `{api_key}` within the [Developer Access](https://dataplatform.cloud.ibm.com/developer-access?context=wx) page.

```
1curl -X POST \
2-H 'Content-Type: application/x-www-form-urlencoded' \
3--data 'grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey={api_key}' \
4'https://iam.cloud.ibm.com/identity/token'
```

**2. Send request to re-rank endpoint**

Make a request to the `/ml/v1/text/rerank` endpoint using your `{access_token}` and `{project_id}`.

— You can access your `{project_id}` within the [Developer Access](https://dataplatform.cloud.ibm.com/developer-access?context=wx) page.

```sh
1curl --request POST \
2"https://{cluster_url}/ml/v1/text/rerank?version=2023-10-25" \
3-H 'Authorization: Bearer {access_token}' \
4-H 'Accept: application/json' \
5-d '{
6  "model_id": "cross-encoder/ms-marco-minilm-l-12-v2",
7  "project_id": "{project_id}",
8  "inputs": [
9    {
10      "text": "In my younger years, I often reveled in the excitement of spontaneous adventures and embraced the thrill of the unknown, whereas in my grownup life, I've come to appreciate the comforting stability of a well-established routine."
11    },
12    {
13      "text": "As a young man, I frequently sought out exhilarating experiences, craving the adrenaline rush of life's novelties, while as a responsible adult, I've come to understand the profound value of accumulated wisdom and life experience."
14    }
15  ],
16  "query": "As a Youth, I craved excitement while in adulthood I followed Enthusiastic Pursuit.",
17  "parameters": {
18    "return_options": {
19      "top_n": 2 // Number of top results to return
20    }
21  }
22}'
```

### Response

The API returns a JSON response with the following structure:

```json
1{
2  "model_id": "cross-encoder/ms-marco-minilm-l-12-v2",
3  "results": [
4    {
5      "index": 1,
6      "score": 0.7461
7    },
8    {
9      "index": 0,
10      "score": 0.8274
11    }
12  ],
13  "created_at": "2024-02-21T17:32:28Z",
14  "input_token_count": 20
15}
```







# Model tuning

## Overview

Prompt tuning is an efficient and low-cost way to adapt an AI foundation model to new downstream tasks without retraining the model and updating its weights. You can tune foundation models in IBM watsonx.ai programmatically by using the Python library.

## Quick start

The TuneExperiment class is responsible for creating experiments and scheduling tunings. All experiment results are stored automatically in the user-specified IBM Cloud Object Storage for SaaS or in the cluster’s file system for Cloud Pak for Data. Then, the TuneExperiment feature can fetch the results and provide them directly to the user for further usage.

### Import and configure PromptTuner

Replace `{watsonx_ai_url}`, `{apikey}`, `{project_id}`, and `{space_id}` with your information.

```python
1from ibm_watsonx_ai import Credentials
2from ibm_watsonx_ai.experiment import TuneExperiment
3
4credentials = Credentials(
5  url = "{watsonx_ai_url}",
6  apikey = "{apikey}",
7)
8
9experiment = TuneExperiment(
10    credentials=Credentials(...),
11    project_id = "{project_id}"
12    space_id="{space_id}")
13
14prompt_tuner = experiment.prompt_tuner(
15    name="prompt tuning name",
16    task_id=experiment.Tasks.CLASSIFICATION,
17    base_model=ModelTypes.FLAN_T5_XL,
18    accumulate_steps=32,
19    batch_size=16,
20    learning_rate=0.2,
21    max_input_tokens=256,
22    max_output_tokens=2,
23    num_epochs=6,
24    tuning_type=experiment.PromptTuningTypes.PT,
25    verbalizer="Extract the satisfaction from the comment. Return simple '1' for satisfied customer or '0' for unsatisfied. Input: {{input}} Output: ",
26    auto_update_model=True
27)
```

### Run prompt tuning

```python
1from ibm_watsonx_ai.helpers import DataConnection, ContainerLocation, S3Location
2
3tuning_details = prompt_tuner.run(
4    training_data_references=[DataConnection(
5        connection_asset_id=connection_id,
6        location=S3Location(
7            bucket='prompt_tuning_data',
8            path='pt_train_data.json'
9        )
10    )],
11    background_mode=False)
12
13# OR
14
15tuning_details = prompt_tuner.run(
16    training_data_references=[DataConnection(
17        data_asset_id='5d99c11a-2060-4ef6-83d5-dc593c6455e2')
18    ],
19    background_mode=True)
20
21# OR
22
23tuning_details = prompt_tuner.run(
24    training_data_references=[DataConnection(
25        location=ContainerLocation("path_to_file.json"))
26    ],
27    background_mode=True)
```

The watsonx.ai Python library has methods and helper classes for tuning foundation models. For more information about the library, see [Prompt tuning](https://ibm.github.io/watsonx-ai-python-sdk/pt_tune_experiment_run.html).









# Embeddings

## Overview

Use an embedding model and the embeddings API to create text embeddings that capture the meaning of sentences or passages for use in your generative AI applications. Converting text into [text embeddings](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-embed-overview.html?context=wx&audience=wdp) helps with document comparison, question-answering, and in retrieval-augmented generation (RAG) tasks, when you need to retrieve relevant content quickly.

Embedding models that are used for this API request are detailed [in this list](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html?context=wx&audience=wdp).

### Example

The following example uses the `slate-125m-english-rtrvr` to generate embeddings from three lines of text input. Replace `{token}` and `{watsonx_ai_url}` with your information.

```curl
1curl -X POST \
2-H "Authorization: Bearer {token}" \
3-H "Accept: application/json" \
4-d "{
5  "inputs": [
6    \"Youth craves thrills while adulthood cherishes wisdom.\",
7    \"Youth seeks ambition while adulthood finds contentment.\",
8    \"Dreams chased in youth while goals pursued in adulthood.\"
9  ],
10  \"model_id": \"ibm/slate-125m-english-rtrvr\",
11  \"project_id": \"12ac4cf1-252f-424b-b52d-5cdd9814987f\"
12}" \
13"{watsonx_ai_url}/ml/v1/text/embeddings?version=2024-05-31"
```

### Response

The response is an array of embeddings for each input string, as in this sample.

```json
1{
2  "model_id": "ibm/slate-125m-english-rtrvr",
3  "results": [
4    {
5      "embedding": [-0.006929283, -0.005336422, -0.024047505]
6    }
7  ],
8  "created_at": "2024-02-21T17:32:28Z",
9  "input_token_count": 10
10}
```

## Next steps

For more examples and information about the embeddings API, see the following links:

- [Text embeddings example](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-embed-overview.html?context=wx&audience=wdp#example)
- [Embeddings service parameters (Python)](https://ibm.github.io/watsonx-ai-python-sdk/_modules/ibm_watsonx_ai/foundation_models/embeddings/embeddings.html#Embeddings)
- [API reference](https://cloud.ibm.com/apidocs/watsonx-ai#text-embeddings)







# Text extraction (Tech Preview)

## Overview

Use the extraction method of the REST API to convert files that are highly structured and use diagrams, images, and tables to convey information, into an AI-model-friendly JSON file format. [Extracting text from documents](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-api-text-extraction.html?context=wx&audience=wdp) works by applying natural language understanding technology that is developed by IBM to identify document structures.

Supported file types for this API request are detailed [in this list](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-api-text-extraction.html?context=wx&audience=wdp#supported-input-file-types).

### Extract text

The following command submits a request to extract text from a file called `document.pdf`.

#### Example

```curl
1curl --request POST 'https://{cluster_url}/ml/v1/text/extractions?version=2023-10-25'
2-H 'Authorization: Bearer eyJhbGciOiJSUzUxM...'
3-H 'Content-Type: application/json'
4-H 'Accept: application/json'
5-d '{
6  "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f"
7  "document_reference": {
8    "type": "connection_asset",
9    "connection": {
10      "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"
11    },
12    "location": {
13      "file_name": "files/document.pdf"
14    }
15  },
16  "results_reference": {
17    "type": "connection_asset",
18    "connection": {
19      "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"
20    },
21    "location": {
22      "file_name": "results"
23    }
24  },
25  "steps": {
26    "tables_processing": {
27      "enabled": true
28    }
29  }
30}'
```

#### Response

The response is a created resource and details for the text extraction.

```json
1{
2  "metadata": {
3    "id": "6213cf1-252f-424b-b52d-5cdd9814956c",
4    "created_at": "2023-05-02T16:27:51Z",
5    "project_id": "12ac4cf1-252f-424b-b52d-5cdd9814987f",
6    "name": "extract"
7  },
8  "entity": {
9    "document_reference": {
10      "type": "connection_asset",
11      "connection": {
12        "id": "6f5688fd-f3bf-42c2-a18b-49c0d8a1920d"
13      },
14      "location": {
15        "file_name": "files/document.pdf"
16      }
17    },
18    "results_reference": {
19      "type": "connection_asset",
20      "connection": {
21        "id": "2a7c11bc-2913-48d0-9581-a8d9f40fa159"
22      },
23      "location": {
24        "file_name": "results"
25      }
26    },
27    "steps": {
28      "tables_processing": {
29        "enabled": true
30      }
31    },
32    "results": {
33      "status": "submitted",
34      "number_pages_processed": 0
35    }
36  }
37}
```

For more information about some of the structures recognized by the API, see [Extracting text from documents](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-api-text-extraction.html?context=wx&audience=wdp#example-output).

### Use the extracted text

Take the extracted text from the generated JSON file and store it as plain text. For example, take the extracted text from the generated JSON file and store it in a plain text file named `parsed_output_text.txt`.

#### Example

```sh
1cat output_report | jq '[.all_structures.tokens[].text] | join(" ")' > parsed_output_text.txt
```

Or return the number of pages in the original PDF file.

#### Example

```sh
1cat output_report.json | jq '.metadata.num_pages'
```

## Next steps

For additional information about the extraction API, see the following links:

- [Extraction service parameters (Python)](https://ibm.github.io/watsonx-ai-python-sdk/_modules/ibm_watsonx_ai/foundation_models/extractions/text_extractions.html#TextExtractions)
- [API reference](https://cloud.ibm.com/apidocs/watsonx-ai#text-extraction)









# AutoAI RAG (Beta)

## Overview

The AutoAI RAG experiment class is responsible for creating experiments and scheduling training. All experiment results are stored in an instance of IBM Cloud Object Storage and can be fetched for further usage.

To schedule an AutoAI RAG experiment, call the `run()` method. This method triggers a training and optimization process on watsonx.ai. For more information, see [Automating a RAG pattern with the AutoAI SDK](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/autoai-programming-rag.html?context=wx&audience=wdp).

## Quickstart

Use the AutoAI Python SDK to automate and accelerate the design and deployment of an optimized, production-quality, retrieval augmented generation (RAG) pattern based on your data and use case. The following example Python code runs a RAG experiment.

### Example

```python
1run_details = rag_optimizer.run(
2    input_data_references=[input_data_connection],
3    test_data_references=[test_data_connection],
4    results_reference=results_connection,
5    background_mode=True
6)
```

### Response

The code returns the status of the experiment, either `running` or `completed`.

```python
1completed
```

## Next steps

For additional information about the AutoAI RAG API, see the following links:

- [Notebook example: Automating RAG pattern with Chroma database](https://github.com/IBM/watson-machine-learning-samples/tree/master/cloud/notebooks/python_sdk/experiments/autoai_rag/Use AutoAI RAG and Chroma to create a pattern about IBM.ipynb)
- [Notebook example: Automating RAG pattern with Milvus database](https://github.com/IBM/watson-machine-learning-samples/tree/master/cloud/notebooks/python_sdk/experiments/autoai_rag/Use AutoAI RAG and Milvus to create a pattern about IBM.ipynb)
- [AutoAI RAG service parameters (Python)](https://ibm.github.io/watsonx-ai-python-sdk/autoai_working_with_class_and_rag_optimizer.html)







# Agents

## Build and deploy your first agent using watsonx.ai

This guide will walk you through building and deploying an AI agent using watsonx.ai. The example project is a **research agent** that can search the web to summarize research papers using external tools.

<iframe src="https://www.kaltura.com/p/1773841/sp/177384100/embedIframeJs/uiconf_id/27941801/partner_id/1773841?iframeembed=true&amp;entry_id=1_2rhhpnlc" title="Use Agent Templates in watsonx.ai to kickstart your agent development (4:33 min)" allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation allow-downloads" referrerpolicy="origin-when-cross-origin" frameborder="0" style="box-sizing: inherit; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-optical-sizing: inherit; font-size-adjust: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: initial; width: 600px; aspect-ratio: 16 / 9;"></iframe>

Use Agent Templates in watsonx.ai to kickstart your agent development (4:33 min)

### 1. Visit Developer Access page

To begin using the CLI, you will need 3 values: a project or space id, an endpoint for your region, and an API key. You can visit the [Developer Access](https://dataplatform.cloud.ibm.com/developer-access?context=wx) page to receive these values. Make sure to also follow the link on the Developer Access page to get your IBM Cloud API key separately.

### 2. Start building

Python

#### Prerequisites

- Python 3.11
- An IBM Cloud account with watsonx.ai access

#### 1: Install the CLI

Create a new directory on your machine and install the CLI by running:

```sh
1pip install ibm-watsonx-ai-cli
```

#### 2: Set up a template

Run the command below to pick one of the [supported agent templates](https://github.com/IBM/watsonx-developer-hub/tree/main/agents):

```sh
1watsonx-ai template new
```

And select any of the templates, for example: `community/langgraph-arxiv-research`.

#### 4: Set the enviroment variables

Once the template is set up, move into the created directory and copy the `config.toml` file:

```sh
1cd langgraph-arxiv-research
2cp config.toml.example config.toml
```

In this file you need to add the values for:

- `deployment.watsonx_apikey`
- `deployment.watsonx_url`
- `deployment.space_id`
- `deployment.online.parameters.space_id`
- `deployment.online.parameters.url`

Go to the [Developer Access](https://dataplatform.cloud.ibm.com/developer-access) page to find your environment variables.

Everything is now set up to run the agent locally in the next step.

#### 5. Running the agent locally

You can run the agent locally and interact with the agent via a terminal-based chat application:

```sh
1watsonx-ai template invoke "show me the latest arxiv papers on the model context protocol"
```

This should return a list of arXiv papers regarding the Model Context Protocol.

#### 6. Deploying to IBM Cloud

Deploy the agent by running:

```bash
1watsonx-ai service new
```

You can test your deployment using the command:

```bash
1watsonx-ai service invoke 'Hello, how can you help me?'
```

Or by clicking the link to view the deployed agent in the dashboard.

#### Troubleshooting

| Issue                | Solution                               |
| :------------------- | :------------------------------------- |
| IBM Cloud API errors | Double-check `config.toml` credentials |

### 3. Preview the agent in the dashboard

Once an agent is deployed to watsonx.ai you can find the API endpoint to connect to the agent from a remote location or directly interact with the agent using the built-in chat interface. To use the agent via the chat interface follow these steps:

#### 1. Find your newly deployed agent

In the [watsonx.ai dashboard under “Deployments”](https://dataplatform.cloud.ibm.com/ml-runtime/spaces?context=wx) where you should open the space you just deployed the agent to.

#### 2. Open the space

By clicking on the space (in this case “agent test”) you can find the list of deployments, after running the script from the previous section you should see a new deployment in this list.

![List of deployed agents on watsonx.ai](https://www.ibm.com/images/agents/list-agents.png)

*Note: Make sure to check the deployment has the tag `wx-agent` as this is needed to interact with it via the “Preview” tab.*

#### 3. Find the preview tab

After clicking on the latest deployment, you can see the private and public API endpoint of the agent, you can also see a “Preview” tab which you’ll need to open to test the agent in the chat interface.

![Deployed agent on watsonx.ai](https://www.ibm.com/images/agents/deployed-agent.png)

#### 4. Ask the agent

In the chat interface you can ask the same questions as you did when running the agent locally, for example”: “show me a list or arxiv papers about the model context protocol. This should (again) return a list of papers published on ArXiv that mention Model Context Protocol (MCP). You can also see what tools the agent called to retrieve this information.

![Preview a deployed agent on watsonx.ai](https://www.ibm.com/images/agents/preview-agent.png)

You can ask follow up questions, for example, to summarize any of the papers.

## Next Steps

- Explore the [watsonx.ai Python SDK documentation](https://ibm.github.io/watsonx-ai-python-sdk/).
- Browse more examples in the [`watsonx-developer-hub`](https://github.com/IBM/watsonx-developer-hub/tree/main/agents) repository.
- Reach out to us on [Discord](https://ibm.biz/wx-discord) if you have any questions or want to share feedback.









# Guides

Learn how to build generative AI applications and solutions using watsonx, with the guides published by AI experts on [IBM Developer](https://developer.ibm.com/components/watsonx-ai/).

#### Build an agentic framework with CrewAI memory, i18n, and IBM watsonx.ai

Paarttipaabhalaji Manohar



#### Five ways to use the new Granite 3.2 models

Bill Higgins, Anthony Colucci



#### Last chance for early-bird pricing for IBM TechXchange 2025!

Neil MacKinnon



#### The open source ecosystem of watsonx

Maureen McElaney



#### Enhancing AI retrieval with HNSW in RAG applications

Niranjan Khedkar



#### AI model training with PyTorch

Kiersten Stokes, Mike Brown, Sahdev Zala, BJ Hargrave



#### Contributing knowledge to open-source LLMs like the Granite models using the InstructLab UI

Ahmed Azraq



#### Highlights from IBM TechXchange Dev Day: Virtual Agents!

Neil MacKinnon



#### Build a multilingual language detection and translation system using IBM watsonx.ai

Bhavishya Pandit



#### Contributing knowledge to the open source Granite model using InstructLab

Ahmed Azraq



#### Optimizing LLMs with cache augmented generation

Gautam Chutani, Anupam Chakraborty



#### Build OpenAI-like web agents using IBM watsonx.ai

Bhavishya Pandit



#### Top 10 generative AI blogs, articles, or tutorials in 2024

Michelle Corbin



#### Create a LangChain AI Agent in Python using watsonx

Anna Gutowska



#### Handle remote tool calling with Model Context Protocol

Roy Derks



#### Build a tool calling agent with LangGraph and watsonx.ai flows engine

Roy Derks



#### Transform plain language queries with AQL CodeGen and watsonx

Honey Gidwani, Divya Kamath, Rahul K P



#### Adversarial prompting - Testing and strengthening the security and safety of large language models

Bryan Clark



#### Scale enterprise AI with IBM watsonx

Nikhil Gopal



#### Build smart AI agents by integrating CrewAI and watsonx

Abhijeet Gorai



#### Introducing the IBM RAG Cookbook

Dean Sacoransky, Luke Major, Sara Golestaneh



