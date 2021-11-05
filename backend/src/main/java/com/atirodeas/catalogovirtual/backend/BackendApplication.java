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
	productoService.guardar(new Producto("Ciclismo","Badana con tirantas","Badana con tirantas cliclismo de ruta hombre",149000.0,true,7,"https://contents.mediadecathlon.com/p1932824/k$c16dbdd93e72856fac877d686930e347/camiseta-manga-corta-clima-calido-ciclismo-carretera-hombre-rc100-rayas-rojo.jpg?&f=800x800"));
	productoService.guardar(new Producto("Ciclismo","Gafas Ciclismo","JGafas de ciclismo adulto roardr",74000.0,true,5,"https://contents.mediadecathlon.com/p1829057/k$b0157db570b19d303391627db4532bf0/gafas-de-ciclismo-adulto-roadr-500-categoria-3-azul-marino.jpg?&f=800x800"));
	productoService.guardar(new Producto("Boxeo","Saco","Saco de boxeo 500 strike kick boxing negro",594000.0,true,4,"https://contents.mediadecathlon.com/p1990723/k$50e61892ed5039c42214c1d19f78f6f6/saco-de-boxeo-500-strike-kick-boxing-negro.jpg?&f=800x800"));
	productoService.guardar(new Producto("Boxeo","Canillera kick boxing","Canillera kick boxing 100 ergo negro",59000.0,true,4,"https://contents.mediadecathlon.com/p1982033/k$1ab1c375a2a716a9ded551a0175e49e5/canilleras-kick-boxing-100-ergo-negroslashrojoslashgris.jpg?&f=800x800"));
}

}
