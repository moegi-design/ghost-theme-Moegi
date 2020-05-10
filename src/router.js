import router from "page"
import Index from "./routes/Index.svelte"
import Post from "./routes/Post.svelte"

let page
let params

router('/', () => page = Index)
router('/page/:page', (ctx, next) => {
  params = ctx.params
  next()
}, () => page = Index)
router('/tag/:tag_slug', (ctx, next) => {
  params = ctx.params
  next()
}, () => page = Index)
router('/author/:author_slug', (ctx, next) => {
  params = ctx.params
  next()
}, () => page = Index)
router('/:slug', (ctx, next) => {
  params = ctx.params
  next()
}, () => page = Post)

router.start({ click: false })

export default {
  page,
  params
}