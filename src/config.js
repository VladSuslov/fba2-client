const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "fba2-api-prod-serverlessdeploymentbucket-8vafxlou76fh",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://36ecukt0w4.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_vP9lU4nY4",
      APP_CLIENT_ID: "1d996nkqldajtl3fhck4kttgi2",
      IDENTITY_POOL_ID: "us-east-1:11a70c97-4fc7-42e8-94e6-263da318eed0",
    },
  };
  
  export default config;