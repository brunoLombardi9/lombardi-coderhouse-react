import { Button, Grid, TextField, Typography } from "@mui/material";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utilities/firebase";
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';



function Tracking() {
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState();
    const [tracking, setTracking] = useState("");


    useEffect(() => {

    }, [input])

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        const ordenes = collection(db, "ordenes");
        const ordenesFiltradas = query(ordenes)
        const consulta = getDocs(ordenesFiltradas);

        consulta
            .then(res => {
                const ordenesObtenidas = res.docs;
                const buscarOrden = ordenesObtenidas.filter(e => e.id === input);
                const ordenBuscada = buscarOrden.map(e => e.data())
                setTracking(ordenBuscada);
                console.log(tracking)

            })
            .catch(error => console.log(error))



    }


    if (tracking === "") {
        return (
            <Grid container justifyContent="center">

                <Typography variant="h3">Ingrese el Id de su compra:</Typography>
                <TextField
                    placeholder="Id de compra"
                    type="text"
                    name="id"
                    onChange={handleChange}
                    value={input}
                    // fullWidth="true"
                    required
                />
                <Link to={`./${input}`}><Button onClick={handleSubmit}>Consultar</Button></Link>
            </Grid>
        )
    } else if (tracking !== "" && tracking !== [] && tracking !== undefined) {
        return (
            <Grid container>
                <h1>orden</h1>
            </Grid>
        )
    }


}

export default Tracking;