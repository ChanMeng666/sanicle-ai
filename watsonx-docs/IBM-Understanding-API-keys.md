Understanding API keys

Last updated 2022-06-14

LangSwitcher dropdown

# 

An application programming interface key (API key) is a unique code that is passed in to an API to identify the calling application or user. API keys are used to track and control how the API is being used, for example to prevent malicious use or abuse of the API. The API key often acts as both a unique identifier and a secret token for authentication, and is assigned a set of access that is specific to the identity that is associated with it.

To view your API keys, go to **Manage** > **Access (IAM)** > **API keys** in the IBM Cloud console.

## IBM Cloud API keys for users

IBM Cloud® API keys are associated with a user's identity, and each API key that is created by the user has the same access that the user is assigned. The access that the user is assigned can be from policies across multiple accounts that the user is a member of. Therefore, it is possible that a user's API key can be used to generate a token and access resources that a user has access to outside of the account where the API key was created.

The user API key can be used directly or used to generate a token. Because users can be members of multiple accounts and have access to many resources across multiple accounts, and the API key is used to identify the user, it can provide the ability to gain access to almost any resource, in any account, that the user has access to. For this reason, the user API key should be treated similar to a username and password and should never be shared.

IBM Cloud API keys for users can be created and associated with a functional ID. A functional ID is a user ID created to represent a program, application, or service. The functional ID can be invited to an account and assigned only the access for a particular purpose, such as interacting with a specific resource or application. The functional ID should be granted only the minimum level access in a single account that is needed for the specific function which it was created.

If a service requires a user API key for interacting with other services or applications, use the functional ID user API key. By using the API key that is associated with the functional ID, you can provide only the access that is needed for that service. Sharing a real user ID API key with a service allows the service to access any resources that the user can access across multiple accounts. Sharing a real user ID API key is highly discouraged.

Only the user for which the API key is associated and an Administrator for the Identity Service can delete it. You can use the IBM Cloud API keys in the command-line interface (CLI) or as part of automation to log in as your user identity. You can also use IBM Cloud API keys to access classic infrastructure APIs.

For more information about using an API key associated with your user identity, see [Managing user API keys](https://cloud.ibm.com/docs/account?topic=account-userapikey#manage-user-keys).

## Other types of API keys

In addition to your IBM Cloud API keys, a couple of other types of API keys are available that you might use:

- Service ID API keys
- Classic infrastructure API keys
- Service-specific API keys

You can also use API keys that are associated with service IDs that you create. Service IDs are used to connect an application inside or outside of IBM Cloud to an IBM Cloud service. Service ID API keys inherit all access that is assigned to the specific service ID. For more information about creating API keys associated with a service ID, see [Managing service ID API keys](https://cloud.ibm.com/docs/account?topic=account-serviceidapikeys#serviceidapikeys).

[Classic infrastructure API keys](https://cloud.ibm.com/docs/account?topic=account-classic_keys) are used to call the APIs for classic infrastructure services. You can create only one classic infrastructure API key at a time. You can create a classic infrastructure API key for yourself from the API keys page or the User details page.



Tip: IBM Cloud API keys can also be used to access classic infrastructure APIs.



Some services in IBM Cloud might provide an API key when you work with the service that is an auto-generated API key associated with a service ID. For example, if you are viewing the product details of a Watson service by going to the Resource list page, you can create a credential that includes an API key and secret that is specific to that service on the Service credentials page.

## Working with API keys

To manage the IBM Cloud API keys that are associated with your user identity or the ones that you have access to manage for other users in the account, go to **Manage** > **Access (IAM)** > **API keys** in the IBM Cloud console.

On the IBM Cloud API keys page, you can create, edit, or delete IBM Cloud API keys for yourself, and you can manage all classic infrastructure API keys for users to which you are an ancestor in the user hierarchy. This means you can manage API keys for all users you invited to the account, or your child users invited to the account, and so on. In addition, if you are the account owner or a user with the required access to manage other user's API keys in the account, you can use the **View** filter to list and manage those API keys.

### Required access for managing API keys

By default, you always have access to create your own API keys, and then update and delete them as needed. You also can manage your own classic infrastructure API key and any users' classic infrastructure API keys who you are an ancestor of in the classic infrastructure user hierarchy, meaning you invited the user or someone you invited to the account invited the user, and so on.



Important: If the Restrict API key creation IAM account setting is enabled, then everyone in the account is blocked from creating API keys, including the account owner, unless they are assigned explicit access. For more information, see [Restricting users from creating API keys](https://cloud.ibm.com/docs/account?topic=account-allow-api-create).



If you are the account owner or a user with the required access, you can access other user's API keys or service ID API keys by using the **View** filter on the API keys page. You can edit or delete the API keys depending on your assigned access. You see only the filter options for the type of API keys that you have access to view and manage.

| Filter Options                  | Displayed API Keys                                           | Required Access                                              | Allowed Actions            |
| :------------------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- | :------------------------- |
| My IBM Cloud API keys           | Your IBM Cloud API keys                                      | No access required                                           | View, create, edit, delete |
| All IBM Cloud user API keys     | All IBM Cloud API keys created by all users in the account   | Administrator role on the IAM Identity service               | View, edit, and delete     |
| All service ID API keys         | All API keys created for service IDs in the account          | Administrator role on the IAM Identity service               | View, edit, and delete     |
| Classic infrastructure API keys | Your classic infrastructure API key and any classic infrastructure API keys for users who you are ancestor of in the user hierarchy | No access required other than being an ancestor in the user hierarchy | View details and delete    |

Table 1. Required access for API key management on the API keys page



---



Managing user API keys

Last updated 2025-02-12

LangSwitcher dropdown









# 

A federated user or nonfederated user can create an API key to use in the CLI or as part of automation to log in as your user identity. You can use the console, CLI, or API to manage your IBM Cloud® API keys by listing your keys, creating keys, update keys, or delete keys.

The API key inherits all assigned access for the user identity for which it is created, and the access is not limited to just the account where the API key is created because it inherits any policies that are assigned to the user. So, if the user has access to resources from multiple accounts, then the API key inherits the access from all accounts. Therefore, it is possible that a user's API key can be used to generate a token and access resources that a user has access to outside of the account where the API key was created.

The API key that is associated with your user identity has all of the access you're entitled to across any account that you are a member of. For this reason, you must be cautious with how you use your API key. For example, an IBM Cloud service might need to act on behalf of a user or access services that are not IAM-enabled, so the service might request a user API key. In these cases, create an API key that's associated with a functional ID that is assigned the minimum level of access that is required to work with the service.

A functional ID is a user ID created to represent a program, application, or service. The functional ID can be invited to an account and assigned only the access for a particular purpose, such as interacting with a specific resource or application. The functional ID should be granted only the minimum level access in a single account that is needed for the specific function for which it was created.



Note: If you are applying a trusted profile, you can't create a user API key. You can still create and manage all other API keys. For example, service ID API keys. For more information, see the [FAQ about IAM](https://cloud.ibm.com/docs/account?topic=account-iamfaq#tp-apikey).



## Managing user API keys

To manage the IBM Cloud API keys that are associated with your user identity or the ones that you have access to manage for other users in the account, go to **Manage** > **Access (IAM)** > **API keys** in the IBM Cloud console. On the API keys page, you can create, edit, or delete IBM Cloud API keys for yourself. You can also manage all [classic infrastructure API keys](https://cloud.ibm.com/docs/account?topic=account-classic_keys) for users that you are an ancestor of in the user hierarchy. In addition, if you are the account owner or a user assigned the required access to manage other user's API keys in the account, you can use the **View** filter to list and manage those API keys too.

| Filter Options              | Displayed API Keys                                         | Required Access                            | Allowed Actions            |
| :-------------------------- | :--------------------------------------------------------- | :----------------------------------------- | :------------------------- |
| My IBM Cloud API keys       | Your IBM Cloud API keys                                    | No access required                         | View, create, edit, delete |
| All user IBM Cloud API keys | All IBM Cloud API keys created by all users in the account | Administrator role on IAM Identity service | View, edit, and delete     |

Table 1. Required access for API key management on the API keys page

## Creating an API key in the console

As an IBM Cloud user you might want to use an API key when you enable a program or script without distributing your password to the script. A benefit of using an API key is that a user or organization can create several API keys for different programs. The API keys can be deleted independently if compromised without interfering with other API keys or even the user. You can create up to 20 API keys.

To create an API key for your user identity in the UI, complete the following steps:

1. In the IBM Cloud console, go to **Manage** > **Access (IAM)** > **API keys**.
2. Click **Create an IBM Cloud API key**.
3. Enter a name and description for your API key.
4. Click **Create**.
5. Then, click **Show** to display the API key. Or, click **Copy** to copy and save it for later, or click **Download**.



Tip: For security reasons, the API key is only available to be copied or downloaded at the time of creation. If the API key is lost, you must create a new API key.



## Updating an API key in the console

If you want to change the name or the description of an API key, complete the following steps in the UI or CLI.

To edit an API key, complete the following steps:

1. In the IBM Cloud console, go to **Manage** > **Access (IAM)** > **API keys**.
2. Identify the row of the API key that you want to update, and click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **Edit**.
3. Update the information for your API key.
4. Click **Apply**.



Tip: To edit an API key that is not your own, but you have access to manage, go to the API keys page. Then, select the **All user IBM Cloud API keys** option from the **View** menu to find the API key.



## Locking and unlocking an API key in the console

For platform API keys that represent your user identity you can prevent the API key from being deleted by locking it. A locked API key has the **Locked** icon ![Locked icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/account/images/locked.svg).

1. In the IBM Cloud console, go to **Manage** > **Access (IAM)** > **API keys**.
2. Identify the row of the API key that you want to lock, and click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **Lock**.



Tip: You can unlock your API key at any time to update or remove the API key from your account. Select the API key from the table that you want to unlock and click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **Unlock**.



## Deleting an API key

If you are using a key rotation strategy, you might want to delete an older key and replace it with a new key.

To delete an API key, complete the following steps:

1. In the IBM Cloud console, go to **Manage** > **Access (IAM)** > **API keys**.
2. Identify the row of the API key that you want to delete, and click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **Delete**.
3. Then, confirm the deletion by clicking **Delete**.



Tip: To delete an API key that is not your own, but you have access to manage, go to the API keys page. Then, select the **All user IBM Cloud API keys** option from the **View** menu to find the API key.









---



Managing user API keys

Last updated 2025-02-12

LangSwitcher dropdown









# 

A federated user or nonfederated user can create an API key to use in the CLI or as part of automation to log in as your user identity. You can use the console, CLI, or API to manage your IBM Cloud® API keys by listing your keys, creating keys, update keys, or delete keys.

The API key inherits all assigned access for the user identity for which it is created, and the access is not limited to just the account where the API key is created because it inherits any policies that are assigned to the user. So, if the user has access to resources from multiple accounts, then the API key inherits the access from all accounts. Therefore, it is possible that a user's API key can be used to generate a token and access resources that a user has access to outside of the account where the API key was created.

The API key that is associated with your user identity has all of the access you're entitled to across any account that you are a member of. For this reason, you must be cautious with how you use your API key. For example, an IBM Cloud service might need to act on behalf of a user or access services that are not IAM-enabled, so the service might request a user API key. In these cases, create an API key that's associated with a functional ID that is assigned the minimum level of access that is required to work with the service.

A functional ID is a user ID created to represent a program, application, or service. The functional ID can be invited to an account and assigned only the access for a particular purpose, such as interacting with a specific resource or application. The functional ID should be granted only the minimum level access in a single account that is needed for the specific function for which it was created.



Note: If you are applying a trusted profile, you can't create a user API key. You can still create and manage all other API keys. For example, service ID API keys. For more information, see the [FAQ about IAM](https://cloud.ibm.com/docs/account?topic=account-iamfaq#tp-apikey).



## Creating an API key by using the API

To create an API key, call the [IAM Identity Service API](https://cloud.ibm.com/apidocs/iam-identity-token-api?code=go#create-api-key) as shown in the following example:













```javascript
const params = {
  name: apikeyName,
  iamId: iamId,
  description: 'Example ApiKey',
};

iamIdentityService.createApiKey(params)
  .then(res => {
    apikeyId = res.result.id
    console.log(JSON.stringify(res.result, null, 2));
  })
  .catch(err => {
    console.warn(err);
  });
```

For `action_when_leaked`, possible values are "none", "disable", or "delete". The default action is "disable".

- **disable**: Disabling the key immediately blocks its ability to authenticate and access services. You can re-enable the key later if necessary.
- **delete**: The API key is permanently deleted from your account and can no longer be used to authenticate. This action cannot be undone.
- **none**: The key remains active and can still be used to access resources.

For `support_sessions`, define whether you can manage CLI login sessions for the API key:

- **true**: Create login sessions for this API key, which you can manage by reviewing or revoking sessions. For more information, see [Monitoring your login sessions](https://cloud.ibm.com/docs/account?topic=account-monitor-your-session).
- **false**: No sessions are created or tracked. You can't revoke or review any logins and you must delete or rotate the API key itself to block access.

## Updating an API key by using the API

To edit an API key by using the API, call the [IAM Identity Service API](https://cloud.ibm.com/apidocs/iam-identity-token-api?code=go#update-api-key) as shown in the following example:













```javascript
const params = {
  id: apikeyId,
  ifMatch: apikeyEtag,
  description: 'This is an updated description',
};

iamIdentityService.updateApiKey(params)
  .then(res => {
    console.log(JSON.stringify(res.result, null, 2));
  })
  .catch(err => {
    console.warn(err);
  });
```

## Locking and unlocking an API key by using the API

For platform API keys that represent your user identity you can prevent the API key from being deleted by locking it.

### Locking an API key by using the API

To lock an API key by using the API, call the [IAM Identity Service API](https://cloud.ibm.com/apidocs/iam-identity-token-api?code=go#lock-api-key) as shown in the following example:













```javascript
const params = {
  id: apikeyId,
};

iamIdentityService.lockApiKey(params)
  .then(res => {
    console.log(JSON.stringify(res.result, null, 2));
  })
  .catch(err => {
    console.warn(err);
  });
```

### Unlocking an API key

To unlock an API key by using the API, call the [IAM Identity Service API](https://cloud.ibm.com/apidocs/iam-identity-token-api?code=go#unlock-api-key) as shown in the following example:













```javascript
const params = {
  id: apikeyId,
};

iamIdentityService.unlockApiKey(params)
  .then(res => {
    console.log(JSON.stringify(res.result, null, 2));
  })
  .catch(err => {
    console.warn(err);
  });
```

## Deleting an API key by using the API

To delete an API key by using the API, call the [IAM Identity Service API](https://cloud.ibm.com/apidocs/iam-identity-token-api#delete-api-key) as shown in the following example:













```javascript
const params = {
  id: apikeyId,
};

iamIdentityService.deleteApiKey(params)
  .then(res => {
    console.log(JSON.stringify(res.result, null, 2));
  })
  .catch(err => {
    console.warn(err);
  });
```



---





Managing service ID API keys

Last updated 2025-01-30

LangSwitcher dropdown









# 

Service IDs are created to enable access to your IBM Cloud® services by applications hosted both inside and outside of IBM Cloud. API keys are used by an application to authenticate as a particular service ID and are granted the access that is associated with that specific service ID.

After you create a service ID, you can start creating API keys and assigning service policies. Each policy specifies the level of access that is allowed when the API key is used to authenticate with your services. For more information about creating a service ID and assigning policies, see [Creating and working with service IDs](https://cloud.ibm.com/docs/account?topic=account-serviceids). For more information about the CLI commands that are used to manage service ID API keys, see [Managing IAM access, API keys, service IDs, and access groups](https://cloud.ibm.com/docs/cli?topic=cli-ibmcloud_commands_iam).

Each API key that is associated with a service ID inherits the policy that is assigned to the service ID. For example, if you want one application to view resources within a service, you need to use an API key that is associated with a service ID that has a policy that is assigned with the Viewer role. If you want another application to be able to have full access within a service, then you need to use an API key that is associated with a second service ID that has a policy that is assigned with the Administrator role.



Tip: For some examples of how a service ID can be used, go to [Using HMAC credentials](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-uhc-hmac-credentials-main) in the Object Storage documentation, or this IBM Cloud Data Engine video on [How to use the IBM Cloud Data Engine REST API](https://www.youtube.com/watch?v=jDZKF0CnUvU).



## Required access for managing service ID API keys

All users can create service IDs in an account, and they are the administrator for those IDs and can create the associated API key and access policies. However, account owners and users assigned the Administrator role on the IAM Identity service can manage the API keys for all service IDs in an account. Users can also be given access to a single service ID only, if the ID is specified when the administrator assigns the access.

If you are a user with the required access, you can view, update, and delete API keys for any service ID in the account. Go to the **API keys** page, and select the **All service ID API keys** option in the **View** menu to find an API key that you want to view details for, update, or delete.

## Creating an API key for a service ID

Create an API key to associate with a service ID in the console:

1. In the IBM Cloud console, go to **Manage** > **Access (IAM)**, and select **Service IDs**.
2. If you don't have a service ID created, create the service ID.
3. Click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **Manage service ID**.
4. Click **API keys**.
5. Click **Create**.
6. Add a name and description to easily identify the API key.
7. Click **Create**.
8. Save your API key by copying or downloading it to secure location.



Note: For security reasons, the API key is only available to be copied or downloaded at the time of creation. If the API key is lost, you must create a new API key.



## Updating an API key for a service ID by using the console

You can update an API key by editing the name or description that is used to identify the key in the UI.

1. In the IBM Cloud console, go to **Manage** > **Access (IAM)**, and select **Service IDs**.
2. Click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **Manage service ID**.
3. Click **API keys**.
4. Click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **Edit name & description**.



Tip: If you didn't create the service ID, but you are the account owner or an administrator for the IAM Identity service, you can update API keys for any service ID in the account. Go to the **API keys** page, and select the **All service ID API keys** option in the **View** menu to find the API key that you want to work with.



## Locking a service ID's API key

For API keys that represent the identity of the service ID, you can prevent the API key from being deleted by locking it. A locked API key is indicated by the **Locked** icon ![Locked icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/account/images/locked.svg) in the UI.

1. In the IBM Cloud console, click **Manage** > **Access (IAM)**, and select **Service IDs**.
2. Identify the row of the service ID that you want to select an API key for, and select the name of the service ID.
3. Click **API keys**.
4. Hover on the row of the API key that you want to lock, and click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) to open a list of options.
5. Click **Lock API key**.



Tip: You can unlock your API key at any time to update, delete, or add an access policy, or to remove the API key.



## Deleting an API key for a service ID

You can delete an API key that is associated with a service ID. However, deleting an API key that is used by an application removes the ability for that application to authenticate with your services.

1. In the IBM Cloud console, go to **Manage** > **Access (IAM)**, and select **Service IDs**.
2. If you don't have a service ID created, create the service ID.
3. Click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **Manage service ID**.
4. Click **API keys**.
5. Click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **Delete**.



Tip: If you didn't create the service ID, but you are the account owner or an administrator for the IAM Identity service, you can delete API keys for any service ID in the account. Go to the **API keys** page, and select the **All service ID API keys** option in the **View** menu to find the API key that you want to work with.





---



Managing classic infrastructure API keys

Last updated 2022-02-18

LangSwitcher dropdown

# 

You can use classic infrastructure API keys to access classic infrastructure APIs. You can have only one classic infrastructure API key per user, and each user can create, delete, and view the details for their API key. If you are an ancestor in the classic infrastructure hierarchy for a user, you can also edit or delete those user's API keys.



Tip: IBM Cloud® [API keys](https://cloud.ibm.com/docs/account?topic=account-userapikey#create_user_key-api) can also be used to access classic infrastructure APIs.



To manage classic infrastructure API keys, go to **Manage** > **Access (IAM)** > **API keys**, and select **Classic infrastructure API keys** in the IBM Cloud console. You can see your classic infrastructure API key and any API keys for users that you are an ancestor for in the user hierarchy, meaning you invited the user or someone you invited to the account invited the user, and so on.

## Creating a classic infrastructure API key

When you create a classic infrastructure API key, you can use the IP address restrictions feature on the **User details** page. To create a classic infrastructure API key, complete the following steps:

1. 

2. Note:

3. In the IBM Cloud console, go to **Manage** > **Access (IAM)** > **API keys**, and select **Classic infrastructure API keys**.
4. Click **Create a classic infrastructure key**. If you don't see this option, check to see if you already have a classic infrastructure API key that is created because you're only allowed to have one in the account per user.
5. Copy or download the API key, and save it in a safe place. You can retrieve the details of the API key later.

To get the details of a classic infrastructure API key after you create it, click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **View details**. You can copy the API key value.

To get the details of a classic infrastructure API key after you create it, go to **Manage** > **Access (IAM)** > **Users** in the IBM Cloud console, then select the user's name. From the API keys section, click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **View details** in the row for the classic infrastructure API key row. You can copy the API key value.



Tip: In most cases, the username of your classic infrastructure API key will be your `<account_ID>_<email_address>`. It is the same as your VPN username displayed on your User details page in the VPN password section.



To delete a classic infrastructure API key, click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg) > **Delete** on the row for the API key in the API keys section.

## Managing other user's classic infrastructure API keys

If you are an ancestor in the classic infrastructure hierarchy for a user, you can view and delete classic infrastructure API keys for users, including VPN only users.



Note: Only users who create the API key can retrieve the API key value after it's created.



In the IBM Cloud console, go to **Manage** > **Access (IAM)** > **API keys**, and select **Classic infrastructure API keys**. Then, click the **Actions** icon ![Actions icon](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/icons/action-menu-icon.svg), and select actions whether it's to view the details or delete the API key.





---



Generating an IBM Cloud IAM token by using an API key

Last updated 2025-01-28

LangSwitcher dropdown

# 

Generate an IBM Cloud® Identity and Access Management (IAM) token by using either your IAM API key or a service ID's API key. IBM Cloud APIs can be accessed only by users who are authorized by an assigned IAM role. Each user who is calling the API must pass credentials for the API to authenticate.

## Generating an IAM token

You can generate an IAM token by using either your [IBM Cloud API key](https://cloud.ibm.com/docs/account?topic=account-userapikey#userapikey) or a [service ID's API key](https://cloud.ibm.com/docs/account?topic=account-serviceidapikeys). The API key is a permanent credential that can be reused if you don't lose the API key value or delete the API key in the account. This process is also used if you are developing an application that needs to work with other IBM Cloud services. You must use a service ID API key to get an access token to be passed to each of the IBM Cloud services.



Note: An access token is a temporary credential that expires after 1 hour at the latest. After the acquired token expires, you must generate a new token to continue calling IBM Cloud or service APIs, and you can perform only actions that are allowed by your level of assigned access within all accounts. Use the response property `expires_in` in the API response to identify the length of time that your specific access token is valid.



## Generate an IAM token by using an API key

To programmatically generate an IAM token by using an API key, call the [IAM Identity Services API](https://cloud.ibm.com/apidocs/iam-identity-token-api#create-api-key) or [SDKs](https://github.com/IBM/ibm-cloud-sdk-common/blob/main/README.md#authentication) as shown in the following sample request.













```javascript
const ExampleServiceV1 = require('mysdk/example-service/v1');
const { IamAuthenticator } = require('mysdk/auth');

const authenticator = new IamAuthenticator({
  apikey: '<iam-api-key>',
});

const myService = new ExampleServiceV1({
  authenticator,
});
```

### Expected response

```
{
  "access_token": "eyJhbGciOiJIUz......sgrKIi8hdFs",
  "refresh_token": "SPrXw5tBE3......KBQ+luWQVY=",
  "token_type": "Bearer",
  "expires_in": 3600,
  "expiration": 1473188353
}
```

For more information, see the [SDK](https://github.com/IBM/ibm-cloud-sdk-common/blob/main/README.md#authentication).



Note: An IAM token is valid for up to 60 minutes, and it is subject to change. When a token expires, you must generate a new one. Use the property `expires_in` for the expiration of the IAM token that you have just created.





---



Invoking IBM Cloud service APIs

Last updated 2025-01-28

LangSwitcher dropdown

# 

To authorize applications and services to make API calls, pass your credentials to the service's API to authenticate your user identity and your access to perform actions within the context of the service.

You can identify the caller in one of the following ways:

- IBM Cloud Identity and Access Management (IAM) token
- IBM Cloud API key or service ID API key

[IBM Cloud API keys](https://cloud.ibm.com/docs/account?topic=account-userapikey#manage-user-keys), [service ID API keys](https://cloud.ibm.com/docs/account?topic=account-serviceidapikeys), and IAM tokens uniquely identify the caller’s identity. The caller identity is either an IBM Cloud user or a service ID that was created in an IBM Cloud account.

The API keys are credentials that consist of a long series of random characters or numbers. An IBM Cloud identity can have multiple API keys. Each of these API keys can be managed independently, meaning if this API key is used by your service only, you can delete the API key without disrupting some other component.

You can use API keys to [log in to the IBM Cloud command-line interface (CLI)](https://cloud.ibm.com/docs/cli?topic=cli-ibmcloud_cli#ibmcloud_login) or to [generate IAM tokens](https://cloud.ibm.com/docs/account?topic=account-iamtoken_from_apikey). While it is not recommended for production use, you can also send API keys to IBM Cloud services.

## Passing an IBM Cloud IAM token to authenticate with a service's API

To retrieve an IAM access token, the API client must first invoke an IBM Cloud IAM API to authenticate and retrieve that token. The preferred way for IBM Cloud service API clients is to use an IBM Cloud API key to get an IAM access token. The IAM access token, which was implemented as a [JSON Web Token](https://www.ibm.com/think/topics/json-web-tokens), can be used for multiple invocations of IBM Cloud services that accept IAM access tokens as an authentication method. As IAM access tokens are digitally signed with asymmetric keys, IBM Cloud services can validate an IAM access token without invoking any external service. This dramatically improves the performance of invoking an API.





![Authenticating with a service API by using an access token](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/account/images/tokenauth.svg)

Figure 1. Retrieving a token from IAM by using an API key and passing the access token to target services to validate credentials



To authenticate with a service's API by using an access token, complete the following steps:

1. First, [create an IBM Cloud API key](https://cloud.ibm.com/docs/account?topic=account-userapikey#manage-user-keys) if you have not already.
2. The next step for the API client is the retrieval of an IAM access token, as described in [Getting an IAM token from an API key](https://cloud.ibm.com/docs/account?topic=account-iamtoken_from_apikey).
3. From the response, extract the property `access_token` to get the IAM access token. `expires_in` indicates the seconds until the IAM access token `access_token` expires. Either use this relative value or the absolute time stamp `expiration` based in [UNIX time](https://en.wikipedia.org/wiki/Unix_time).
4. Send the IAM access token as described in [RFC 6750, section 2.1. Authorization Request Header Field](https://datatracker.ietf.org/doc/html/rfc6750#page-5).

Review the following example:

1. Use the HTTP header Authorization
2. Prefix the IAM access token with the literal `Bearer eyJhbGciOiJSUzI1Ng...`
3. Add the prefixed IAM access token to the HTTP header: `Authorization: Bearer eyJhbGciOiJSUzI1Ng...`













```javascript
const ExampleServiceV1 = require('mysdk/example-service/v1');
const { BearerTokenAuthenticator } = require('mysdk/auth');

const authenticator = new BearerTokenAuthenticator({
  bearerToken: '<access-token>',
});

const myService = new ExampleServiceV1({
  authenticator,
});
...

// Later when the access token expires, the application must acquire
// a new access token, then set it on the authenticator.
// Subsequent request invocations will include the new access token.
authenticator.setBearerToken('<new-access-token>')
```

Show more



Tip: Use the same IAM access token for subsequent IBM Cloud service API calls to achieve the best performance and scalability.



[Node SDK reference](https://github.com/IBM/ibm-cloud-sdk-common/blob/main/README.md#3-create-a-bearer-token-authenticator-programmatically)

## Passing an IBM Cloud API key to authenticate with a service API

API clients can directly pass an IBM Cloud API key to the target service’s API. To do so, send the `apikey` keyword as the user name and the IBM Cloud API key as the password by using basic authorization HTTP header to the target service.



Tip: It is recommended that in all cases of passing an API key to a service API that you use an API key for a service ID or a user API key that is associated with a functional ID that is assigned only the level of access required to work with the particular service.



The target service API must introspect the IBM Cloud API key by using the IBM Cloud IAM service. The following graphic shows three API interactions. The IBM Cloud API key is passed to every target service’s API, so each target service must look up the IBM Cloud API key details by invoking IBM Cloud IAM.





![Authenticating with a service API by using an API key](https://cloud.ibm.com/docs-content/v4/content/1752b2f63ef7193f30e125ad34114d6aa54f3d19/account/images/APIkeyauth.svg)

Figure 2. Passing API keys to target services which then pass the API key to IAM to validate credentials



Using an IBM Cloud API key is convenient, and it makes it easy to discover new APIs and quickly try out prototypes. This method requires you to send the IBM Cloud API key to the target service‘s API in a readable format, which unnecessarily compromises the API key. Additionally, as the target service’s API must always introspect the API key, this method is less performant and therefore not recommended for production work loads.

To authenticate with a service's API by using an API key, complete the following steps:

1. First, [create an IBM Cloud API key](https://cloud.ibm.com/docs/account?topic=account-userapikey#manage-user-keys) if you have not already.
2. Send the IBM Cloud API key as defined in [RFC 7617](https://datatracker.ietf.org/doc/html/rfc7617) as HTTP header “Authorization”. Use `apikey` as the user name, and the API key value as the password.

As an example, the following steps assume that the API key is 0a1A2b3B4c5C6d7D8e9E:

1. Concatenate the user name `apikey` and the API key that is separated by a colon: `apikey:0a1A2b3B4c5C6d7D8e9E`
2. Base64 encode the string: `base64("apikey:0a1A2b3B4c5C6d7D8e9E") => YXBpa2V5OjBhMUEyYjNCNGM1QzZkN0Q4ZTlF`
3. Set the HTTP header Authorization with schema Basic, for example `Authorization: Basic YXBpa2V5OjBhMUEyYjNCNGM1QzZkN0Q4ZTlF`. When you use the curl command, you can pass this with the parameter -u:













```javascript

```

The username is `apikey` and the password is the api key itself.
