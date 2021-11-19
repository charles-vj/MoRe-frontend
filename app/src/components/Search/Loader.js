import spinner from './loader1.svg'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
        </div>
    )
}

export default Loader;