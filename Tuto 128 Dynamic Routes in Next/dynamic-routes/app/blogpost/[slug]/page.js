export default async function Page({ params }) {

  // throw new Error("error hai")
  const { slug } = await params
  let text = slug.toUpperCase();
  //fetch your blog post by its slug
  let languages = ["python", "javascript", "java", "cpp", "c"]
  if (languages.includes(slug)) {

    return <div>My Post: {text}</div>
  }
  else {

    return <div>Post NOt Found</div>
  }

}
