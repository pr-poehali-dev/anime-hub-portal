import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Anime {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  episodes: number;
  voices: number;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const featuredAnime = {
    title: 'Demon Slayer: Kimetsu no Yaiba',
    description: 'Юный Танджиро становится охотником на демонов после трагедии, постигшей его семью. Теперь его целью стала месть и поиск способа вернуть человечность своей сестре.',
    image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/d7c714be-3771-4259-a78d-43410df9b48b.jpg',
    rating: 9.2,
    year: 2024,
    episodes: 26,
    voices: 5
  };

  const popularAnime: Anime[] = [
    { id: 1, title: 'Атака Титанов', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 9.1, year: 2023, genre: 'Экшн', episodes: 24, voices: 8 },
    { id: 2, title: 'Магическая битва', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 8.9, year: 2024, genre: 'Сёнэн', episodes: 24, voices: 6 },
    { id: 3, title: 'Моя геройская академия', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 8.7, year: 2024, genre: 'Экшн', episodes: 25, voices: 7 },
    { id: 4, title: 'Токийский Гуль', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 8.5, year: 2023, genre: 'Триллер', episodes: 12, voices: 5 },
    { id: 5, title: 'Наруто: Ураганные хроники', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 9.0, year: 2023, genre: 'Сёнэн', episodes: 500, voices: 10 },
    { id: 6, title: 'Ван Пис', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 9.3, year: 2024, genre: 'Приключения', episodes: 1000, voices: 12 },
  ];

  const newReleases: Anime[] = [
    { id: 7, title: 'Блич: Тысячелетняя кровавая война', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 9.0, year: 2024, genre: 'Экшн', episodes: 13, voices: 4 },
    { id: 8, title: 'Кагуя-сама: В любви как на войне', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 8.8, year: 2024, genre: 'Романтика', episodes: 12, voices: 3 },
    { id: 9, title: 'Стальной алхимик', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 9.2, year: 2024, genre: 'Фэнтези', episodes: 64, voices: 9 },
    { id: 10, title: 'Хантер х Хантер', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 9.4, year: 2024, genre: 'Приключения', episodes: 148, voices: 11 },
    { id: 11, title: 'Евангелион', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 8.9, year: 2024, genre: 'Меха', episodes: 26, voices: 6 },
    { id: 12, title: 'Стальная тревога', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 8.6, year: 2024, genre: 'Меха', episodes: 24, voices: 5 },
  ];

  const uniqueVoices: Anime[] = [
    { id: 13, title: 'Клинок, рассекающий демонов', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 9.1, year: 2023, genre: 'Экшн', episodes: 26, voices: 15 },
    { id: 14, title: 'Обещанный Неверленд', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 8.7, year: 2023, genre: 'Триллер', episodes: 12, voices: 8 },
    { id: 15, title: 'Моб Психо 100', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 8.9, year: 2024, genre: 'Комедия', episodes: 25, voices: 10 },
    { id: 16, title: 'Ванпанчмен', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 9.0, year: 2024, genre: 'Комедия', episodes: 24, voices: 12 },
    { id: 17, title: 'Класс убийц', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 8.8, year: 2023, genre: 'Экшн', episodes: 47, voices: 9 },
    { id: 18, title: 'Тетрадь смерти', image: 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg', rating: 9.2, year: 2023, genre: 'Триллер', episodes: 37, voices: 14 },
  ];

  const allAnime = [...popularAnime, ...newReleases, ...uniqueVoices];

  const filteredAnime = allAnime.filter(anime => {
    const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || anime.genre === selectedGenre;
    const matchesYear = selectedYear === 'all' || anime.year.toString() === selectedYear;
    return matchesSearch && matchesGenre && matchesYear;
  });

  const genres = ['all', 'Экшн', 'Сёнэн', 'Триллер', 'Приключения', 'Романтика', 'Фэнтези', 'Меха', 'Комедия'];
  const years = ['all', '2024', '2023', '2022'];

  const AnimeCard = ({ anime }: { anime: Anime }) => (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer animate-scale-in">
      <div className="aspect-[2/3] overflow-hidden">
        <img 
          src={anime.image} 
          alt={anime.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="font-heading font-bold text-white text-lg mb-2">{anime.title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            <Icon name="Star" size={12} className="mr-1" />
            {anime.rating}
          </Badge>
          <Badge variant="outline" className="border-white/30 text-white">
            {anime.year}
          </Badge>
        </div>
        <div className="flex items-center gap-3 text-sm text-white/80">
          <span className="flex items-center gap-1">
            <Icon name="Film" size={14} />
            {anime.episodes} эп
          </span>
          <span className="flex items-center gap-1">
            <Icon name="Mic" size={14} />
            {anime.voices} озв
          </span>
        </div>
        <Button className="mt-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Смотреть
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Play" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="font-heading font-bold text-2xl">AniHub</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="hover:text-primary transition-colors">Сообщество</a>
              <a href="#" className="hover:text-primary transition-colors">Ачивки</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] overflow-hidden animate-fade-in">
        <div className="absolute inset-0">
          <img 
            src={featuredAnime.image} 
            alt={featuredAnime.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-slide-left">
            <Badge className="bg-primary text-primary-foreground mb-4">
              🔥 Популярно сейчас
            </Badge>
            <h2 className="font-heading font-bold text-5xl md:text-6xl mb-4 text-white leading-tight">
              {featuredAnime.title}
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              {featuredAnime.description}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-white">
                <Icon name="Star" size={20} className="text-primary" />
                <span className="font-semibold">{featuredAnime.rating}</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full" />
              <span className="text-white/80">{featuredAnime.year}</span>
              <div className="w-1 h-1 bg-white/50 rounded-full" />
              <span className="text-white/80">{featuredAnime.episodes} эпизодов</span>
              <div className="w-1 h-1 bg-white/50 rounded-full" />
              <span className="text-white/80 flex items-center gap-1">
                <Icon name="Mic" size={16} />
                {featuredAnime.voices} озвучек
              </span>
            </div>
            <div className="flex gap-3">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Icon name="Info" size={20} className="mr-2" />
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-heading font-bold text-3xl">🔥 Популярное сейчас</h3>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            Смотреть всё
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-heading font-bold text-3xl">✨ Новые поступления</h3>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            Смотреть всё
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {newReleases.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-heading font-bold text-3xl">🎤 С уникальными озвучками</h3>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            Смотреть всё
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {uniqueVoices.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

      <section id="catalog" className="container mx-auto px-4 py-16">
        <h3 className="font-heading font-bold text-3xl mb-8">📚 Каталог аниме</h3>
        
        <div className="bg-card rounded-xl p-6 mb-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="text-sm text-muted-foreground mb-2 block">Поиск</label>
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Название аниме..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background border-border"
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Жанр</label>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Выберите жанр" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre === 'all' ? 'Все жанры' : genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Год</label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Выберите год" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year === 'all' ? 'Все годы' : year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>

        {filteredAnime.length === 0 && (
          <div className="text-center py-16">
            <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-lg">Ничего не найдено</p>
          </div>
        )}
      </section>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-primary-foreground" />
                </div>
                <h4 className="font-heading font-bold text-xl">AniHub</h4>
              </div>
              <p className="text-muted-foreground">
                Инновационная платформа для просмотра аниме с персонализированным опытом
              </p>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ачивки</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-semibold mb-4">Помощь</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-semibold mb-4">Подписка</h5>
              <p className="text-muted-foreground mb-4">Получайте новости о новых релизах</p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="bg-background border-border" />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 AniHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
