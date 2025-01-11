
type Params = Promise<{ id: string }>;

const MenDetailPage = async (props: { params: Params }) => {
    const params = await props.params
    const id = params.id

  return (
    <div>MenDetailPage</div>
  )
}

export default MenDetailPage