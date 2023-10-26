const getDataTable = async(datas) => {
    let objectData = {}
    objectData = await fetch(`https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${datas}.csv`)
        .then(response => response.text())
        .then(data => {
            const [title, ...values] = data.split('\n')

            const topTitle = title.split(',')

            const dataObject = values.map((ele) =>
                ele
                .split(',')
                .reduce(
                        (dataObject, value, index) => ({
                            ...dataObject,
                            [topTitle[index]]: value,
                        }),
                        {}
                    )
            );

            return dataObject
        })
        return objectData
}
export { getDataTable }