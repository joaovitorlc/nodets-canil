import { Request, Response } from "express";
import { createMenuObeject } from '../healpers/creatMenuObject';

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObeject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    }
  });
}
export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObeject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    }
  });
}
export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObeject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    }
  });
}
export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObeject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    }
  });
}