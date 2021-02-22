import Alena from 'artists/Алена\ Терешко/Alena_walk.mp3'
import Roma from 'artists/Роман\ Осминкин/Roma_walk.mp3'
import Ivan from 'artists/Иван\ Курбаков/ivan_walk.mp3'
import Olga from 'audio/PEREMEN.mp3'

import Martina from 'artists/Martina\ Mächler/martina_walk.mp3'
import Carla from 'artists/Carla\ Demierre/Carla_Writing\ around.mp3'
import Andrea from 'artists/Andrea\ Marioni/Andrea_walk.mp3'
import Francoise from 'audio/PEREMEN.mp3'


const artists = {
  spb: [
    {
      name: ["Алена Терешко", "Alena Tereshko"],
      title: ["Остров и гавань", "The island and the harbour"],
      lat: 59.90469616806995,
      lng: 30.217547243741553,
      audio: Alena,
    },
    {
      name: ["Роман Осминкин", "Roman Osminkin"],
      title: ["Что ты чувствуешь?", "What do you feel?"],
      lat: 59.93600763837134,
      lng: 30.286153729146147,
      audio: Roma,
    },
    {
      name: ["Иван Курбаков", "Ivan Kurbakov"],
      title: ["Северные полмира", "smell of memory, sound of oblivion"],
      lat: 59.94572683679983,
      lng: 30.37266762914453,
      audio: Ivan,
    },
    {
      name: ["Ольга Житлина", "Olga Jitlina"],
      title: ["Égalité", "Égalité"],
      lat: 59.92811584324123,
      lng: 30.346385042008638,
      audio: Olga,
    },
  ],

  gen: [
    {
      name: ["Андреа Мариони", "Andrea Marioni"],
      title: ["Sideways were open", "Sideways were open"],
      lat: 46.210541163964876,
      lng: 6.1429300354337535,
      audio: Martina,
    },
    {
      name: ["Карла Демьер", "Carla Demierre"],
      title: ["Перемен!", "Writing around"],
      lat: 46.225952859615674,
      lng: 6.141753032514459,
      audio: Carla,
    },
    {
      name: ["Мартина Махлер", "Martina Mächler"],
      title: ["капля падает на пол спальни", "blob drops on a bedroom floor"],
      lat: 46.2,
      lng: 6.12,
      audio: Andrea,
    },
    {
      name: ["Françoise Caraco", "Françoise Caraco"],
      title: ["Перемен!", "Перемен!"],
      lat: 46.19,
      lng: 6.11,
      audio: Francoise,
    },
  ],
}


export default artists