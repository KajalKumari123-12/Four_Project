import parse from 'html-react-parser';

const ShowPost = ({content}) => {
  return (
    <div className='tiptap m-4 p-4 bg-pink-100'>
        <div>
            {parse(content)}
        </div>
    </div>
  )
}

export default ShowPost
