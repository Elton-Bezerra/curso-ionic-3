import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Loading } from 'ionic-angular/components/loading/loading';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public lista_filmes = new Array<any>();
  public page = 1;
  public loader: Loading;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;

  public nome_usuario: string = "Elton Bezerra";
  public objeto_feed = {
    titulo: "IOTA a moedinha das iot's",
    data: "November 5, 1955",
    descricao: `Wait a minute. Wait a minute, Doc. 
      Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!    
      Whoa. This is heavy. Mano, isso é back to the future`,
    qtd_likes: 12,
    qtd_comments: 4,
    time_comment: "11h ago"
  };

  //Injeção de dependências
  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider, public loadingCtrl: LoadingController) { }

  abrirLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes.."
    });
    this.loader.present();
  }


  fecharLoader() {
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme) {
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id });
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  carregarFilmes(newpage: boolean = false) {
    this.abrirLoader();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if (newpage) {
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          this.infiniteScroll.complete();
        } else {
          this.lista_filmes = objeto_retorno.results;
        }

        console.log(objeto_retorno);
        this.fecharLoader();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }), error => {
        console.log(error);
        this.fecharLoader();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);    
  }

}