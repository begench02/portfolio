import AuthorImage from 'Images/author.jpg';

export const ImageBlock = () => {
    return (
        <div>
            <img src={AuthorImage} alt='Author'/>
        </div>
    );
};