import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizData, setQuizData] = useState({
    windowType: '',
    roomCount: '',
    installationType: '',
    name: '',
    phone: '',
  });
  const [quizPrice, setQuizPrice] = useState(0);

  const handleQuizNext = () => {
    if (quizStep === 2) {
      const basePrice = quizData.windowType === 'plastic' ? 15000 : quizData.windowType === 'aluminum' ? 25000 : 35000;
      const roomMultiplier = parseInt(quizData.roomCount) || 1;
      const installationPrice = quizData.installationType === 'full' ? 5000 : 3000;
      setQuizPrice(basePrice * roomMultiplier + installationPrice);
    }
    setQuizStep(quizStep + 1);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Home" className="text-primary" size={32} />
              <span className="text-2xl font-heading font-bold text-primary">ОКНА.МОСКВА</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['Главная', 'Преимущества', 'Услуги', 'Каталог', 'Портфолио', 'Цены', 'Гарантии', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('квиз')}>Получить расчет</Button>
          </div>
        </nav>
      </header>

      <section id="главная" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary text-primary-foreground">Профессиональная установка</Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Пластиковые окна в Москве
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Качественные окна от производителя с установкой за 1 день. Гарантия 10 лет. Бесплатный замер и консультация.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection('квиз')}>
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('каталог')}>
                  Смотреть каталог
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/783d3352-971b-467c-a094-8b4fe652fdb0/files/3fac94ad-21a2-4462-8046-f73c820077d6.jpg"
                alt="Современные окна"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Award', title: 'Гарантия 10 лет', description: 'На все виды работ и материалы' },
              { icon: 'Clock', title: 'Установка за 1 день', description: 'Быстрый и качественный монтаж' },
              { icon: 'Shield', title: 'Сертификаты', description: 'Все необходимые документы и лицензии' },
              { icon: 'Wallet', title: 'Цены от производителя', description: 'Без наценок и переплат' },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="font-heading">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Home',
                title: 'Остекление квартир',
                description: 'Полный спектр работ по остеклению квартир любой площади',
                price: 'от 15 000 ₽',
              },
              {
                icon: 'Building',
                title: 'Остекление балконов',
                description: 'Теплое и холодное остекление балконов и лоджий',
                price: 'от 25 000 ₽',
              },
              {
                icon: 'Warehouse',
                title: 'Коммерческое остекление',
                description: 'Остекление офисов, магазинов и производственных помещений',
                price: 'от 50 000 ₽',
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" onClick={() => scrollToSection('квиз')}>
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="каталог" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Каталог окон</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Окна ПВХ',
                description: 'Классические пластиковые окна с отличной тепло- и звукоизоляцией',
                features: ['3-камерный профиль', 'Двухкамерный стеклопакет', 'Фурнитура ROTO'],
                price: '15 000 ₽',
                image: '/placeholder.svg',
              },
              {
                name: 'Алюминиевые окна',
                description: 'Прочные и долговечные окна для балконов и лоджий',
                features: ['Легкая конструкция', 'Устойчивость к коррозии', 'Срок службы 50+ лет'],
                price: '25 000 ₽',
                image: '/placeholder.svg',
              },
              {
                name: 'Премиум окна',
                description: 'Энергоэффективные окна с максимальной шумоизоляцией',
                features: ['5-камерный профиль', 'Трехкамерный стеклопакет', 'Премиум фурнитура'],
                price: '35 000 ₽',
                image: '/placeholder.svg',
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <Icon name="Frame" size={64} className="text-muted-foreground" />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button onClick={() => scrollToSection('квиз')}>Выбрать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/783d3352-971b-467c-a094-8b4fe652fdb0/files/3fac94ad-21a2-4462-8046-f73c820077d6.jpg',
                title: 'Остекление квартиры на Кутузовском',
                description: '3-комнатная квартира, 6 окон',
              },
              {
                image: 'https://cdn.poehali.dev/projects/783d3352-971b-467c-a094-8b4fe652fdb0/files/16389d04-b7ce-4c3b-a65d-021e54e58702.jpg',
                title: 'Балкон в ЖК "Новая Москва"',
                description: 'Теплое остекление с отделкой',
              },
              {
                image: 'https://cdn.poehali.dev/projects/783d3352-971b-467c-a094-8b4fe652fdb0/files/27c47bc2-5736-48b9-a6ba-1545a394f1dc.jpg',
                title: 'Панорамные окна в пентхаусе',
                description: 'Премиум остекление 180°',
              },
            ].map((work, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{work.title}</CardTitle>
                  <CardDescription>{work.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Цены и тарифы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '15 000 ₽',
                features: ['1 окно ПВХ', 'Стандартный монтаж', 'Гарантия 5 лет', 'Бесплатный замер'],
              },
              {
                name: 'Оптимальный',
                price: '40 000 ₽',
                features: ['3 окна ПВХ', 'Профессиональный монтаж', 'Гарантия 7 лет', 'Откосы в подарок'],
                popular: true,
              },
              {
                name: 'Премиум',
                price: '80 000 ₽',
                features: ['5 окон премиум', 'VIP монтаж', 'Гарантия 10 лет', 'Отделка + подоконники'],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : ''} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Icon name="Check" size={18} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'} onClick={() => scrollToSection('квиз')}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="квиз" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Рассчитайте стоимость за 1 минуту</h2>
          <p className="text-center text-muted-foreground mb-12">Ответьте на несколько вопросов и получите точный расчет</p>

          <Card className="shadow-xl">
            <CardContent className="pt-6">
              {quizStep === 0 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg mb-4 block">Какой тип окон вас интересует?</Label>
                    <RadioGroup value={quizData.windowType} onValueChange={(value) => setQuizData({ ...quizData, windowType: value })}>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                        <RadioGroupItem value="plastic" id="plastic" />
                        <Label htmlFor="plastic" className="flex-1 cursor-pointer">
                          Пластиковые окна (ПВХ) - от 15 000 ₽
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                        <RadioGroupItem value="aluminum" id="aluminum" />
                        <Label htmlFor="aluminum" className="flex-1 cursor-pointer">
                          Алюминиевые окна - от 25 000 ₽
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                        <RadioGroupItem value="premium" id="premium" />
                        <Label htmlFor="premium" className="flex-1 cursor-pointer">
                          Премиум окна - от 35 000 ₽
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {quizStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg mb-4 block">Сколько окон нужно установить?</Label>
                    <RadioGroup value={quizData.roomCount} onValueChange={(value) => setQuizData({ ...quizData, roomCount: value })}>
                      {['1', '2-3', '4-5', '6+'].map((count) => (
                        <div key={count} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                          <RadioGroupItem value={count} id={count} />
                          <Label htmlFor={count} className="flex-1 cursor-pointer">
                            {count} {count === '6+' ? 'окон' : count === '1' ? 'окно' : 'окна'}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg mb-4 block">Тип установки</Label>
                    <RadioGroup
                      value={quizData.installationType}
                      onValueChange={(value) => setQuizData({ ...quizData, installationType: value })}
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="flex-1 cursor-pointer">
                          Стандартный монтаж (+3 000 ₽)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                        <RadioGroupItem value="full" id="full" />
                        <Label htmlFor="full" className="flex-1 cursor-pointer">
                          Полный монтаж с отделкой (+5 000 ₽)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {quizStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Calculator" size={40} className="text-primary" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold mb-2">Примерная стоимость</h3>
                    <div className="text-5xl font-bold text-primary my-6">{quizPrice.toLocaleString('ru-RU')} ₽</div>
                    <p className="text-muted-foreground mb-8">
                      Оставьте контакты и получите точный расчет с учетом всех параметров
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        placeholder="Иван"
                        value={quizData.name}
                        onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        placeholder="+7 (999) 123-45-67"
                        value={quizData.phone}
                        onChange={(e) => setQuizData({ ...quizData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {quizStep === 4 && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4">Спасибо за заявку!</h3>
                  <p className="text-muted-foreground text-lg">
                    Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей и назначения бесплатного замера.
                  </p>
                </div>
              )}

              {quizStep < 3 && (
                <div className="flex justify-between mt-8">
                  {quizStep > 0 && (
                    <Button variant="outline" onClick={() => setQuizStep(quizStep - 1)}>
                      Назад
                    </Button>
                  )}
                  <Button
                    className="ml-auto"
                    onClick={handleQuizNext}
                    disabled={
                      (quizStep === 0 && !quizData.windowType) ||
                      (quizStep === 1 && !quizData.roomCount) ||
                      (quizStep === 2 && !quizData.installationType)
                    }
                  >
                    Далее
                  </Button>
                </div>
              )}

              {quizStep === 3 && (
                <Button className="w-full mt-6" size="lg" onClick={() => setQuizStep(4)} disabled={!quizData.name || !quizData.phone}>
                  Получить расчет
                </Button>
              )}

              {quizStep === 4 && (
                <Button
                  className="w-full mt-6"
                  variant="outline"
                  onClick={() => {
                    setQuizStep(0);
                    setQuizData({ windowType: '', roomCount: '', installationType: '', name: '', phone: '' });
                    setQuizPrice(0);
                  }}
                >
                  Начать заново
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="гарантии" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Гарантии и сертификаты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading">Официальная гарантия</CardTitle>
                <CardDescription className="text-base">
                  Предоставляем официальную гарантию на окна и монтаж сроком до 10 лет. Все документы оформляются при установке.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileCheck" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading">Сертификаты качества</CardTitle>
                <CardDescription className="text-base">
                  Все окна имеют сертификаты соответствия ГОСТ. Работаем только с проверенными производителями профилей и фурнитуры.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading">Квалифицированные специалисты</CardTitle>
                <CardDescription className="text-base">
                  Все наши монтажники имеют сертификаты и опыт работы от 5 лет. Регулярно проходят обучение у производителей.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="PhoneCall" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading">Сервисное обслуживание</CardTitle>
                <CardDescription className="text-base">
                  Бесплатное постгарантийное обслуживание. Выезд мастера в течение суток после обращения. Работаем без выходных.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-heading hover:no-underline">
                Сколько времени занимает установка окон?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Стандартная установка одного окна занимает 2-3 часа. Полное остекление квартиры (3-4 окна) выполняется за 1 рабочий день.
                Время может увеличиться при необходимости дополнительной отделки откосов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-heading hover:no-underline">Какой профиль лучше выбрать?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для квартир в Москве рекомендуем 3-5 камерный профиль с двухкамерным стеклопакетом. Это оптимальное соотношение цены и
                качества. Такие окна обеспечивают отличную тепло- и звукоизоляцию.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-heading hover:no-underline">
                Когда лучше менять окна - летом или зимой?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Установку можно проводить круглый год. Зимой работы выполняются при температуре не ниже -15°C. Преимущество зимней
                установки - сразу видно качество герметизации и теплоизоляции. Летом работать комфортнее, но цены обычно выше.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-heading hover:no-underline">Как ухаживать за пластиковыми окнами?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Достаточно протирать рамы влажной тряпкой 2 раза в год и смазывать фурнитуру специальным маслом 1 раз в год. Уплотнители
                рекомендуется обрабатывать силиконовой смазкой. Подробную инструкцию предоставим при установке.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-heading hover:no-underline">
                Можно ли установить окна в рассрочку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы работаем с несколькими банками-партнерами. Доступна рассрочка на 6-12 месяцев без переплаты. Для оформления нужен
                только паспорт. Решение принимается в течение 15 минут.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">Телефон</h3>
                      <p className="text-2xl font-bold text-primary mb-1">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground text-sm">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                      <p className="text-lg text-primary">info@okna-moskva.ru</p>
                      <p className="text-muted-foreground text-sm">Ответим в течение часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">Адрес</h3>
                      <p className="text-foreground">г. Москва, ул. Примерная, д. 1</p>
                      <p className="text-muted-foreground text-sm">Офис продаж и шоурум</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Бесплатная консультация</CardTitle>
                <CardDescription>Оставьте заявку и мы перезвоним в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Сообщение (необязательно)</Label>
                    <Input id="contact-message" placeholder="Ваш вопрос" />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" className="text-white" size={28} />
                <span className="text-xl font-heading font-bold text-white">ОКНА.МОСКВА</span>
              </div>
              <p className="text-sm opacity-90">Качественные окна от производителя с профессиональной установкой в Москве и МО</p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4 text-white">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Остекление квартир</li>
                <li>Остекление балконов</li>
                <li>Коммерческое остекление</li>
                <li>Ремонт окон</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4 text-white">Информация</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>О компании</li>
                <li>Гарантии</li>
                <li>Сертификаты</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4 text-white">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>+7 (495) 123-45-67</li>
                <li>info@okna-moskva.ru</li>
                <li>Москва, ул. Примерная, 1</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
            <p>© 2024 ОКНА.МОСКВА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
