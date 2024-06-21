import PropertiesProvider from "./properties/index"

const RootProvider = ({ children }) => {
    return <>
        <PropertiesProvider>
            {children}
        </PropertiesProvider>

    </>
}

export default RootProvider