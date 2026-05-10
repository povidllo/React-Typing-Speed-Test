# ResultsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**resultsBestGet**](#resultsbestget) | **GET** /results/best | Получить лучшие результаты тестирования|
|[**resultsGet**](#resultsget) | **GET** /results | Получить результаты пользователя|
|[**resultsPost**](#resultspost) | **POST** /results | Добавить результаты для пользователя|

# **resultsBestGet**
> UserResults resultsBestGet()


### Example

```typescript
import {
    ResultsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResultsApi(configuration);

let by: 'cpm' | 'wpm'; // (default to undefined)

const { status, data } = await apiInstance.resultsBestGet(
    by
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **by** | [**&#39;cpm&#39; | &#39;wpm&#39;**]**Array<&#39;cpm&#39; &#124; &#39;wpm&#39;>** |  | defaults to undefined|


### Return type

**UserResults**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Успешный ответ |  -  |
|**401** | Не авторизован |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resultsGet**
> Array<UserResults> resultsGet()


### Example

```typescript
import {
    ResultsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResultsApi(configuration);

let length: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.resultsGet(
    length,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **length** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<UserResults>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Успешный ответ |  -  |
|**401** | Не авторизован |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resultsPost**
> UserResults resultsPost(userResultsBody)


### Example

```typescript
import {
    ResultsApi,
    Configuration,
    UserResultsBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ResultsApi(configuration);

let userResultsBody: UserResultsBody; //

const { status, data } = await apiInstance.resultsPost(
    userResultsBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userResultsBody** | **UserResultsBody**|  | |


### Return type

**UserResults**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Результат создан |  -  |
|**401** | Не авторизован |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

