import { Container } from '@mui/material';
import React from 'react'
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import NavBar from '../../../components/Navbar';




function Paginainicio() {
   

    return (
        <>
<style type="text/css">
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,700&display=swap');

                    .raleway {
                        font-family: 'Raleway', sans-serif;
                    }
                    
                    `}
            </style>

        <NavBar>

            <Container>

                <p className='px-4 raleway' >
                    Esse é um trabalho realizado por estudantes do <b style={{ color: "red", textShadow: '1px 1px 2px #000000', fontSize: 18 }}>IESB </b><b style={{ fontSize: 18 }}>(Arthur, Kaio, Maicon e Pedro)</b>,
                    com o intuito de criar um site em front-end, utlizando a API da câmara dos deputados.
                </p>
                <p className='px-4 raleway' >
                    Para a realização do projeto utilizaremos o framework <b style={{ color: "var(--amarelo)", textShadow: '1px 1px 2px #000000', fontSize: 18 }}>Next.js</b> provindo do <b style={{ color: "var(--amarelo)", textShadow: '1px 1px 2px #000000', fontSize: 18 }}>React</b>,
                    adicionamos também o uso de algumas bibliotecas, como: <b style={{ color: "var(--amarelo)", textShadow: '1px 1px 2px #000000', fontSize: 18 }}>react-bootstrap, full-calendar, chart.js,
                        axios, mui, entre outras.</b>
                </p>
                <p className='px-4 raleway'>
                    O projeto tem por finalidade implementar novos componentes não utilizados em sala, no qual incluimos:
                    <b style={{ color: "var(--amarelo)", textShadow: '1px 1px 2px #000000', fontSize: 18 }}> Sistema de busca, barra de reloading, filtros, favoritar deputados, paginação, gráficos, calendário,
                        carousel e exibição de videos.</b>
                </p>
                <Row xs={1}>

                    <Carousel >
                        <Carousel.Item interval={2500}>
                            <CardGroup className='py-2 my-3'>
                                <Col md={4}>
                                    <Card className="my-5">
                                        <Card.Img src="https://media.istockphoto.com/id/1361392613/pt/foto/nacional-congress-palace.jpg?s=612x612&w=0&k=20&c=Qkr9M8_r_b1YhcpSUWXKNkbT4rHzJ0tmxcOx7DOXDiA=" alt="Card image" />
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="my-5">
                                        <Card.Img src="https://images.jota.info/wp-content/uploads/2022/10/deputados-eleitos-bancada.jpg" alt="Card image" />
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="my-5">
                                        <Card.Img src="https://uploads.metropoles.com/wp-content/uploads/2022/12/21163101/Arthur-Lira-presidente-da-Ca%CC%82mara-no-Plena%CC%81rio-da-Ca%CC%82mara-dos-Deputados-onde-sera%CC%81-votada-em-segunda-insta%CC%82ncia-a-PEC-10.jpg" />
                                    </Card>
                                </Col>
                            </CardGroup>
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <CardGroup className='py-2 my-3'>
                                <Col md={4}>
                                    <Card className="my-5">
                                        <Card.Img src="https://midias.correiobraziliense.com.br/_midias/jpg/2022/07/22/675x450/1_projetopoliteia__2_-26097421.jpg?20220722183205?20220722183205" alt="Card image" />
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="my-5">
                                        <Card.Img src="https://mediaserver.almg.gov.br/acervo/585/564/1585564.jpg" alt="Card image" />
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="my-5">
                                        <Card.Img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/08/senado-federal.jpg" alt="Card image" />
                                    </Card>
                                </Col>
                            </CardGroup>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </NavBar>
                    </>
    );
}

export default Paginainicio;


