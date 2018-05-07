open AzureFunctions;

let default = (ctx: Context.t) => {
  let res = {
    "body": {
      "message": "Hello world!"
    }
  };
  Context.setResponse(ctx, res);
  Context._done(ctx, ());
};