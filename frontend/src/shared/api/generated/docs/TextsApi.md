# TextsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**textsGet**](#textsget) | **GET** /texts | Получить текст|

# **textsGet**
> Text textsGet()


### Example

```typescript
import {
    TextsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TextsApi(configuration);

let language: TextLanguage; // (default to undefined)
let lengthType: TextLengthType; // (default to undefined)

const { status, data } = await apiInstance.textsGet(
    language,
    lengthType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **TextLanguage** |  | defaults to undefined|
| **lengthType** | **TextLengthType** |  | defaults to undefined|


### Return type

**Text**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Текста для теста скорости печати |  -  |
|**404** | Ошибка получения текста |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

