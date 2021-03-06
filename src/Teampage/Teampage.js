import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Teampage.css'

const teampapercube = [

    [0,'Hugo Deudor','CEO',"https://papercubehome.files.wordpress.com/2019/05/hugo.jpg",'Es un tipazo',['cafe','te','agua']],
    [1,'Joel Tapia','CFO',"https://papercubehome.files.wordpress.com/2019/05/joel.jpg",'Es un tipazo',['cafe','te','agua']],
    [2,'Jose Mallma','COO',"https://papercubehome.files.wordpress.com/2019/05/jose.jpg",'Es un tipazo',['cafe','te','agua']],
    [3,'Pedro Mendoza','CMO',"https://papercubehome.files.wordpress.com/2019/05/pedro.jpg",'Es un tipazo',['cafe','te','agua']],
    [4,'Juan Mendoza','CTO',"https://papercubehome.files.wordpress.com/2019/05/juan.jpg",'Es un tipazo',['cafe','te','agua']],
    [5,'Anthony Carrera','SCM',"https://papercubehome.files.wordpress.com/2019/05/anthony.jpg",'Es un tipazo',['cafe','te','agua']],

]

class Teampage extends Component {
    constructor(){
        super();
        this.state = {
            numerotamaño :[], 
            numerotamaño2:[],
            numerotamaño3:[],
            numerotamaño4:[],
            modal: false, //for modal
            modalmember:0, //for modal
            membername:[],
        }
        this.toggle = this.toggle.bind(this);
        }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        if(window.innerWidth<590){
          this.setState({numerotamaño: 12 ,numerotamaño2:12,numerotamaño3:1,numerotamaño4:12});
        }
        else
        {
            this.setState({numerotamaño: 6,numerotamaño2:4,numerotamaño3:0,numerotamaño4:4});
            if(window.innerWidth<990){
                this.setState({numerotamaño: 12 ,numerotamaño2:6,numerotamaño3:1,numerotamaño4:6});
            }
            
        }
      }

    toggle(number,e) {
        this.setState(prevState => ({
          modal: !prevState.modal }));
        console.log(number);
        this.setState({membername:teampapercube[number][1],memberimage:teampapercube[number][3]});
    }

    render() {

        let team = teampapercube.map((miembro) => { 
 
            return (

                <Col xs={this.state.numerotamaño4} className="letrasmainphotos" onClick={this.toggle.bind(this,miembro[0])}>

                    <img alt=""  src={miembro[3]} 
                    className="teamretraits">
                    </img>
                    <p className="teamportraitletters">{miembro[1]}</p>
                    <p className="teamportraitletters">{miembro[2]}</p>

                </Col>

            );
        })

      let conditionaldiv = <p></p>;
        if(this.state.numerotamaño3==1)
        {
           conditionaldiv =  <Col xs="3"></Col>;
        }
        else{
            conditionaldiv = <p></p>;
        }


      return (
        <div className="teampagearea">
        
        <Container>
          <Row className="teamtitletext"> 
            <Col xs="12">
              <p>Soluciones tecnologícas diversas para un mundo cada vez más conectado</p>
            </Col>
          </Row>

          <Row className="teamtext"> 
            <Col xs={this.state.numerotamaño} className="teamvisiondiv">
                <img className="teampagemainimg"
                alt="" 
                src="https://www.colcircuitos.com/wp-content/uploads/2017/08/dise%C3%B1oele-03.png"> 
                </img>
            </Col>
            
            <Col xs={this.state.numerotamaño} className="teamvisiondiv">
            <p className="teammainletters">Misión:</p>
            <p>PaperCube tiene como misión ofrecer a sus clientes un abanico de soluciones tecnológicas en distintas ramas de la ingeniería que sean innovadoras, idóneas, eficientes y acordes a las nuevas tendencias, que tengan un impacto positivo y puedan incrementar el valor de su actividad productiva.</p>
            </Col>

            <Col xs={this.state.numerotamaño} className="teammissiondiv">
            <p className="teammainletters">Visión:</p>
            <p>PaperCube busca ser una empresa líder en el mercado de consultoría tecnológica, que sea aliado estratégico y soporte tecnológico de sus clientes. Asimismo, buscamos ser referentes en el desarrollo de soluciones innovadoras que nos permitan compartir nuestro conocimiento con nuestros clientes y con la comunidad. </p>
            </Col>
            
            <Col xs={this.state.numerotamaño} className="teammissiondiv">
                <img className="teampagemainimg"
                alt="" 
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2IOGd?ver=2654&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true"> 
                </img>
            </Col>

          </Row>
            <Row>

                <Col xs={this.state.numerotamaño2}>
                    <img className="teampagemainimg"
                    alt="" 
                    src="https://www.colcircuitos.com/wp-content/uploads/2017/08/dise%C3%B1oele-03.png"> 
                    </img>
                    <p className="teamcharactermainletters">Multidisciplinariedad</p>
                    <p className="teamcharacterletters">Nuestro equipo cuenta con profesionales de diversas ramas de ingeniería que le garantizan una solución integral.</p>
                </Col>

             
                <Col xs={this.state.numerotamaño2}>
                    <img className="teampagemainimg"
                    alt="" 
                    src="https://www.colcircuitos.com/wp-content/uploads/2017/08/dise%C3%B1oele-03.png"> 
                    </img>
                    <p className="teamcharactermainletters">Trabajo en equipo</p>
                    <p className="teamcharacterletters">Nuestra calidad de trabajo, cooperación y cohesión nos permiten ofrecerle una solución óptima en el tiempo adecuado.</p>
                </Col>
                {conditionaldiv}
                <Col xs={this.state.numerotamaño2}>
                    <img className="teampagemainimg"
                    alt="" 
                    src="https://www.colcircuitos.com/wp-content/uploads/2017/08/dise%C3%B1oele-03.png"> 
                    </img>
                    <p className="teamcharactermainletters">Tecnología</p>
                    <p className="teamcharacterletters">Buscamos incorporar la tecnología adecuada a la solución que usted requiere. Continuamente nos capacitamos para ofrecerle lo mejor.</p>
                </Col>
                {conditionaldiv}
            </Row>
            
            <Row className="teamtitletext"> 
            <Col xs="12">

              <p>Nuestro equipo:</p>
              
            </Col>
            </Row>

            <Row>
                {team}
            </Row>


            <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this,0)} className={this.props.className}>
                <ModalHeader toggle={this.toggle.bind(this,0)}>{this.state.membername}</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Col>  
                        <Col>
                        <img src={this.state.memberimage} height="250px" width ="100%"></img>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>

       </Container>

        </div>
        
    );
    }
  }
  
  export default Teampage;