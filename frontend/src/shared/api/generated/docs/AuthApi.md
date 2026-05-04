# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authLoginPost**](#authloginpost) | **POST** /auth/login | Вход в приложение|
|[**authRegistrationPost**](#authregistrationpost) | **POST** /auth/registration | Регистрация в приложении|

# **authLoginPost**
> AuthResponse authLoginPost(authBody)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authBody: AuthBody; //

const { status, data } = await apiInstance.authLoginPost(
    authBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authBody** | **AuthBody**|  | |


### Return type

**AuthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Вход прошел успешно |  -  |
|**401** | Неверные учетные данные |  -  |
|**400** | Ошибка валидации запроса |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRegistrationPost**
> AuthResponse authRegistrationPost(authBody)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authBody: AuthBody; //

const { status, data } = await apiInstance.authRegistrationPost(
    authBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authBody** | **AuthBody**|  | |


### Return type

**AuthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Регистрация прошла успешно |  -  |
|**409** | Пользователь уже существует |  -  |
|**400** | Ошибка валидации данных |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

