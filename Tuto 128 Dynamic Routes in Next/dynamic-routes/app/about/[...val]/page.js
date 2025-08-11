export default async function Page({ params }) {
    let values = await params;
    console.log(values)
    //fetch your blog post by its slug
    return <div>I am about page check console</div>

}