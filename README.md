This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

We used redux, react-redux, redux-saga, redux-immutable, immutable, reselect to manage app state.
Using sagas, immutable and reselect is maybe an overkill, for such a small demo app, but we really benefit from this app architecture as app grows, it scales nicely.

We used react-router-native to enable basic routing through app.

We structured project to make use containers, componentsCommon, util, and api folders.

In containers we place all components that communicate with redux.

We choosed to use sort of feature based structure, so we place related components in components folder inside related container.
We also recognized that we will have some components that can be reused in multiple pages, so we place them in componentsCommon folder.

We extracted all functions that make calls to api, inside api folder.
We also placed calls to asyncStorage in dedicated file inside api folder.

We made callApi function instide /util/callApi, it is useful to have wrapper around all our async calls,
for example, if want to switch to axios or any other dependency we would have to change just callApi function, not all api calls.

We also added remote-redux-devtools to our dev dependencies so that we can debug redux using chrome extension.
This is such a cool debug tool.

We used yarn for package manager, because npm > 5 is still buggy with create-native-react-app.

We can start our project by running in terminal.
```terminal
    yarn start
```
Than we can debug it on a real device.

Or we can run in terminal.
```terminal
    yarn run ios
```
This command will open app in xcode simulator, I used this option since I don't have IPhone, or IPad.

It is required to start server from brolly-task-server repository to be able to login in app.


Best regards,
Stefan Madzarevic