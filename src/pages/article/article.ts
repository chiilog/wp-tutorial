import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WordpressProvider } from '../../providers/wordpress/wordpress';
import { Post } from '../../interfaces/wordpress';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'article/:id',
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
  providers: [ WordpressProvider ]
})
export class ArticlePage {
  post: Post = {
    id: null,
    title: {
      rendered: null,
    },
    content: {
      rendered: null,
    },
    date: null
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public wp: WordpressProvider
  ) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create();
    loading.present();

    const id = this.navParams.get('id');
    this.wp.getArticle(id).subscribe(data => {
        this.post = data;
        loading.dismiss();
      }
    );
  }

}
