//Componentes de clases

// * PROPS
export default function ItemListContainer(props){

    const { subTitle} = props;

    return <section className="text-center">
        <h2 className={'sub-title'}>{subTitle}</h2>
    </section>;
}