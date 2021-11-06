package com.atirodeas.catalogovirtual.backend;

import com.atirodeas.catalogovirtual.backend.entities.Producto;
import com.atirodeas.catalogovirtual.backend.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner{
	@Autowired
	private ProductoService productoService;
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	@Override
  public void run(String... args) throws Exception {
	productoService.eliminarTodos();
	productoService.guardar(new Producto("Ciclismo","Casco","Casco bicicleta urbana amarillo fluorecente",129000.0,true,10,"https://contents.mediadecathlon.com/p1022743/k$e8bad33671b80c9eb31d8703724bd4aa/casco-bicicleta-urbana-500-amarillo-fluorescente.jpg?&f=800x800"));
	productoService.guardar(new Producto("Ciclismo","Guantes","Guantes ciclismo carretera 500 burdeos",37000.0,true,15,"https://contents.mediadecathlon.com/p2007369/k$e83af3e467c94ca57cc8d19fbc8ce7f2/guantes-para-ciclismo-cortos-triban-roadr-500-amarillos.jpg?&f=800x800"));
	productoService.guardar(new Producto("Ciclismo","Jersey Ciclismo","Jersey para ciclismo de ruta manga corta",99000.0,true,11,"https://contents.mediadecathlon.com/p1932824/k$c16dbdd93e72856fac877d686930e347/camiseta-manga-corta-clima-calido-ciclismo-carretera-hombre-rc100-rayas-rojo.jpg?&f=800x800"));
	productoService.guardar(new Producto("Ciclismo","Gafas Ciclismo","JGafas de ciclismo adulto roardr",74000.0,true,5,"https://contents.mediadecathlon.com/p1829057/k$b0157db570b19d303391627db4532bf0/gafas-de-ciclismo-adulto-roadr-500-categoria-3-azul-marino.jpg?&f=800x800"));
	productoService.guardar(new Producto("Boxeo","Saco","Saco de boxeo 500 strike kick boxing negro",594000.0,true,4,"https://contents.mediadecathlon.com/p1990723/k$50e61892ed5039c42214c1d19f78f6f6/saco-de-boxeo-500-strike-kick-boxing-negro.jpg?&f=800x800"));
	productoService.guardar(new Producto("Boxeo","Canillera kick boxing","Canillera kick boxing 100 ergo negro",59000.0,true,4,"https://contents.mediadecathlon.com/p1982033/k$1ab1c375a2a716a9ded551a0175e49e5/canilleras-kick-boxing-100-ergo-negroslashrojoslashgris.jpg?&f=800x800"));
	productoService.guardar(new Producto("Boxeo","Casco con protección facial","Casco con protección facial integrada para boxeo outshock 100 adulto negro",173000.0,true,8,"https://contents.mediadecathlon.com/p1920595/k$24626fb03de24332e58d2f5bf4fc844e/casco-con-proteccion-facial-integrada-para-boxeo-outshock-100-adulto-negro.jpg?&f=800x800"));
	productoService.guardar(new Producto("Boxeo","Vendas 2,5 m","Vendas 2,5 m de boxeo 100 rojas",20000.0,true,25,"https://contents.mediadecathlon.com/p1839529/k$852a5178531e18751c52d0908f044e9b/vendas-25-m-de-boxeo-100-negras.jpg?&f=800x800"));
	productoService.guardar(new Producto("Boxeo","Punching inflable","Punching inflable outshock 100 adulto negro y rojo",322000.0,true,7,"https://contents.mediadecathlon.com/p2150785/k$580dbef6c56c13ac22b6ef67ac9b0932/punching-inflable-outshock-100-adulto-negro-y-rojo.jpg?&f=800x800"));
	productoService.guardar(new Producto("Natación","Gorro de natación","Gorro de natación en silicona negro",15000.0,true,19,"https://contents.mediadecathlon.com/p155548/k$e1ed5350db6396ea02e9a385cdaaf5c8/gorro-silicona-natacion-500-negro.jpg?&f=800x800"));
	productoService.guardar(new Producto("Natación","Vestido de baño","Vestido de baño enterizo natación leony niña morado",19000.0,true,8,"https://contents.mediadecathlon.com/p21332/k$c8cc06abf0d74532416be2aee29645cf/vestido-de-bano-enterizo-natacion-leony-plum-nina-azul.jpg?&f=800x800"));
	productoService.guardar(new Producto("Natación","Gafas de natación","Gafas de natación xbase azul oscuro/rosa oro estampado l lentes claros",22000.0,true,25,"https://contents.mediadecathlon.com/p1767616/k$69bff10c42f86fb1aaf19127bab14d19/gafas-lentes-claros-natacion-xbase-mika-azul-estampado-l.jpg?&f=800x800"));
	productoService.guardar(new Producto("Natación","Toalla microfibra","Toalla microfibra ultracompacta talla xl 110 x 175 cm azul",52000.0,true,7,"https://contents.mediadecathlon.com/p1791392/k$74f181bec08de094ca09a2836ae83413/toalla-microfibra-ultracompacta-talla-xl-110-x-175cm-azul.jpg?&f=800x800"));
	productoService.guardar(new Producto("Atletismo","Tenis tipo spikes","Tenis tipo spikes para correr en pista at start azul marino",142000.0,true,7,"https://contents.mediadecathlon.com/p1780601/k$cb96448b9cbdb103f3e4942573af9aef/tenis-de-taches-de-atletismo-polivalentes-at-start-azul-marino.jpg?&f=800x800"));
	productoService.guardar(new Producto("Atletismo","Medias niños para correr","Medias niños para correr kalenji x2 pares negro/blanco",22000.0,true,17,"https://contents.mediadecathlon.com/p1781590/k$1da60c6be3791ad47a43dd88cbcf86cc/medias-running-kalenji-ninos-negroslashblanco-invisible-lote-2.jpg?&f=800x800"));
	productoService.guardar(new Producto("Atletismo","Licra larga niños","Licra larga niños para correr kalenji at 300 niño negro",69000.0,true,5,"https://contents.mediadecathlon.com/p1791392/k$74f181bec08de094ca09a2836ae83413/toalla-microfibra-ultracompacta-talla-xl-110-x-175cm-azul.jpg?&f=800x800"));
	productoService.guardar(new Producto("Tenis","Pelota de espuma de speedball","Pelota de espuma de speedball turnball slow ball amarillo",15000.0,true,25,"https://contents.mediadecathlon.com/p1009742/k$2bc23c29b78be09ebe84c7d015040d83/pelota-de-espuma-de-speedball-quoteturnball-slow-ballquote-amarillo.jpg?&f=800x800"));
	productoService.guardar(new Producto("Tenis","Raqueta frontenis","Raqueta frontenis urball ftr 890 adulto negro/naranja",297.0,true,2,"https://contents.mediadecathlon.com/p428461/k$7967335775998c40f80ca05c241c138e/raqueta-frontenis-ftr-890-artengo.jpg?&f=800x800"));
	productoService.guardar(new Producto("Tenis","Camiseta polo de tenis","Camiseta polo de tenis dry 100 hombre azul oscuro",35000.0,true,5,"https://contents.mediadecathlon.com/p389022/k$a3ba697e5eb162796db9fd6bfe687a12/camiseta-polo-de-tenis-dry-100-hombre-azul-oscuro.jpg?&f=800x800"));
	
}

}
