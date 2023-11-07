import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/arranjo-de-itens-vintage-de-alto-angulo_23-2149338476.jpg?size=626&ext=jpg&ga=GA1.1.1016090870.1699358807&semt=sph"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Bem Vindos a Vintage Finds!</h5>
          <p>Uma loja de antiguidades</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/despertador-e-garrafa-na-area-de-trabalho_1112-1330.jpg?size=626&ext=jpg&ga=GA1.1.1016090870.1699358807&semt=sph"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Encontre aqui as melhores antiguidades</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/gramofone-vintage-conceito-de-musica-retro_411285-6698.jpg?size=626&ext=jpg&ga=GA1.1.1016090870.1699358807&semt=sph"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Aqui você encontra o melho preço</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Carrossel;