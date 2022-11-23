import './styles.css';

type Props = {
    name: string;
}

const CategoryBadge = ({name} : Props) => {
    
    return (
        <div className="Category-Badge-Container">{name}</div>
    );
}

export default CategoryBadge;