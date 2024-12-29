declare module 'quill' {
  interface QuillOptions {
    modules?: any
    formats?: string[]
    theme?: string
    placeholder?: string
  }

  export default class Quill {
    constructor(container: string | Element, options?: QuillOptions)
  }
}
