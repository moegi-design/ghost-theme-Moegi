import router from "page"
import Index from "./routes/Index.svelte"
import Post from "./routes/Post.svelte"

let page
let params

router('/', () => page = Index)
router('/:slug', (ctx, next) => {
  params = ctx.params
  next()
}, () => page = Post)

router.start({ click: false })

export default {
  page,
  params
}