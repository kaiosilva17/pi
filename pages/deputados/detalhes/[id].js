import apiDeputados from '../../../services/conectaAPI'
import CardMedia from '@mui/material/CardMedia';
import NavBar from '../../../components/Navbar';
import Chart from "chart.js/auto";
import AccordionGastos from '../../../components/Details/AccordionGastos';
import Year from '../../../components/Details/Year';
import React, { useEffect, useRef, useState } from "react";

import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";

const detalhesDeputado = ({ deputadoDados, deputadoId, deputadoFrentesDados }) => {
  const [ano, setAno] = useState(2023)
  const [gastos, setGastos] = useState([])
  const [valores, setValores] = useState([])
  const canvasEl = useRef(null);
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const colors = {
    purple: {
      default: "rgba(236, 179, 52, 1)",
      half: "rgba(236, 179, 52, 0.8)",
      quarter: "rgba(236, 179, 52, 0.25)",
      zero: "rgba(236, 179, 52, 0.2)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };

  useEffect(() => {

    const totais = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < gastos.length; i++) {
      const mes = gastos[i].mes;
      totais[mes] += gastos[i].valorLiquido;
    }

    const mostrar = [];
    totais.forEach((valor, mes) => {
      if (valor > 0) {
        mostrar.push(valor.toFixed(2));
      }
    });

    setValores(mostrar);
  }, [gastos]);


  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const data = {
      labels: meses,
      datasets: [
        {
          backgroundColor: gradient,
          label: "Valor gasto",
          data: valores,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3
        }
      ]
    };
    const config = {
      type: "line",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  }, [valores])


  function teste(teste) {
    setAno(teste)
  }


  useEffect(() => {
    getDataGastos(deputadoId)
  }, [ano])

  async function getDataGastos(deputadoId) {
    const resultadoDeputadoGastos = await apiDeputados.get(`/deputados/${deputadoId}/despesas?&itens=110&ordem=DESC&ano=${ano}`)
    const deputadoGastos = resultadoDeputadoGastos.data.dados

    setGastos(deputadoGastos)
  }

  async function getDataDiscursos(deputadoId) {
    const resultadoDeputadoGastos = await apiDeputados.get(`/deputados/${deputadoId}/despesas?&itens=110&ordem=DESC&ano=${ano}`)
    const deputadoGastos = resultadoDeputadoGastos.data.dados

    setGastos(deputadoGastos)
  }

  return (
    <>
      <NavBar
        navBarItem="main"
        title={deputadoDados["ultimoStatus"].nomeEleitoral}
      >
        <CardContent key={121}>
          <Grid container>
            <Grid md={2}>
              <Card >
                <CardMedia
                  elevation={16}
                  component="img"
                  image={deputadoDados["ultimoStatus"].urlFoto}
                  title={deputadoDados["ultimoStatus"].nomeEleitoral}
                  style={{ borderRadius: "4px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px" }}
                  sx={{
                    borderRadius: 2,
                    boxShadow: 3
                  }}
                />
              </Card>
            </Grid>
            <Grid md={8} sx={{ ml: 4 }}>
              <div className='text-center text-uppercase mb-5' style={{ fontWeight: 1000 }}>
                <h1>{deputadoDados["ultimoStatus"].nome}</h1>
              </div>


              <h3>{deputadoDados.nomeCivil}</h3>
              <p>
                <b>Partido:</b> {deputadoDados.ultimoStatus?.siglaPartido}/
                {deputadoDados.ultimoStatus?.siglaUf} -{" "}
                {deputadoDados.ultimoStatus?.email}
              </p>
              <p>
                <b>CPF:</b> {deputadoDados.cpf}
              </p>
              <p>
                {/* <b>Data Nascimento:</b>{" "}
                    {deputadoDados.dataNascimento
                      ? Moment(deputadoDados.dataNascimento).format("DD/MM/YYYY")
                      : "Data não fornecida"} */}
              </p>
            </Grid>
          </Grid>
        </CardContent>


        {/*         <Paper elevation={5}>
 */}
       
       <div className="App">
              <Year retYear={teste} />
              <canvas id="myChart pt-5" ref={canvasEl} height="100" />
            </div>

            <AccordionGastos arrays={
              [
                {
                  title: "gastos",
                  array:  gastos 
                },
                {
                  title: "frentes",
                  array:  deputadoFrentesDados 
                },

              ]}
            />
        {/*         </Paper>
 */}

        {/*  <div>

          <div className="App">
            <Year retYear={teste} />
            <canvas id="myChart" ref={canvasEl} height="100" />
          </div>

          <AccordionGastos title="gastos" array={gastos} />
        </div>  */}
      </NavBar>
    </>
  )
}
export default detalhesDeputado

export async function getServerSideProps(context) {
  const deputadoId = context.params.id
  const resultadoDeputado = await apiDeputados.get(`/deputados/${deputadoId}`)
  const deputadoDados = resultadoDeputado.data.dados
  const resultadodFrentesDeputado = await apiDeputados.get(`/deputados/${deputadoId}/frentes`)
  const deputadoFrentesDados = resultadodFrentesDeputado.data.dados

  return {
    props: { deputadoDados, deputadoId, deputadoFrentesDados },
  }
}
