<script setup>
    import HomeCard from '../components/InicioCard.vue';
</script>

<template>
    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >
            Podcasts para te fazer inteligente
        </button>

        <div class="py-1.5"></div>

        <div class="flex items-center">
            <HomeCard image="https://picsum.photos/id/30/300/300" title="Cafeina do Bem" subTitle="Bomba De Sinapses" />
            <HomeCard image="https://picsum.photos/id/45/300/300" title="Sudeste Asiatico E Seus Problemas" subTitle="Desvendando O Mundo" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/65/300/300" title="Alegria De Viver" subTitle="Coach Do Amanhã" />
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/21/300/300" title="A Moda Muda" subTitle="Irmãs Rosamel" />
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/26/300/300" title="Segurança Do Dia A Dia" subTitle="Marcos Vinicius" />
        </div>
    </div>

    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >
        Radios Recomendados
        </button>

        <div class="py-1.5"></div>

        <div class="flex items-center">
            <HomeCard image="https://picsum.photos/id/120/300/300" title="Metropolis Ep 76 " subTitle="Radio Metropolitana" />
            <HomeCard image="https://picsum.photos/id/157/300/300" title="Skate da liberdade" subTitle="Freestyle Rap" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/158/300/300" title="Show Barbosa" subTitle="Radio Hawaii" />
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/180/300/300" title="Freelancer Web" subTitle="Desenvolvedores de São Paulo" />
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/225/300/300" title="Mix Jazz" subTitle="Radio Jazz Brasileiro" />
        </div>
    </div>

    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >
        Sons Recomendados
        </button>

        <div class="py-1.5"></div>

        <div class="flex items-center">
            <HomeCard image="https://picsum.photos/id/88/300/300" title="Du Hast" subTitle="Rammstein" />
            <HomeCard image="https://picsum.photos/id/243/300/300" title="Hypnagoga" subTitle="Kammarheit" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/123/300/300" title="Sem Graça" subTitle="Haikaiss" />
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/121/300/300" title="Gray-Tinged Suburbs" subTitle="Mount Shrine" />
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/99/300/300" title="Winter Restlessness" subTitle="Mount Shrine" />
        </div>
    </div>
</template>