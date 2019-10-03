import Plausible from "plausible-vue"

export default function (Vue, options) {
  if (process.isClient) {
    Vue.use(Plausible, { 
      disable: typeof options.disable === "undefined" ? process.env.NODE_ENV !== "production" : options.disable,
      domain: options.domain
    })
  }
}
