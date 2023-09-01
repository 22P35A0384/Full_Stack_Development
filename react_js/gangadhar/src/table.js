function Table(){

    return(
        <div>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>RollNo</th>
                        <th>Branch</th>
                        <th>College</th>
                    </tr>
                </thead>
                <tbody id="tb"></tbody>
            </table>
        </div>
    )
}
export default Table