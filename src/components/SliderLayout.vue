<template>
    <div class="row temp2">
        <div class="col-3"/>
        <carousel :data="data" direction="left" class="col-6 slider" interval="3000"/>
        <div class="col-3"/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueCarousel from '@chenfengyuan/vue-carousel';

    Vue.use(VueCarousel);

    function createSliderArray(input) {
        let result = [];
        for (let i = 0; i < input.length; i++) {
            result.push(createSliderElement(i, input[i]));
            console.log(result);
        }
        return result;
    }

    function createSliderElement(idInput, messageInput) {
        return (
            {
                id: idInput,
                message: messageInput,
                content(createElement, content) {
                    return createElement('p', {
                        class: 'broadcast-content',
                    }, [
                        createElement('span', [`${content.message}`])
                    ]);
                }
            });
    }

    export default {
        props: ["inputArray"],
        data() {
            return {
                data: createSliderArray(this.inputArray)
            };
        },

        methods: {
            content(createElement, data, vm) {
                return createElement('div', {
                    class: 'example-slide',
                }, [`Slide ${vm.$parent.direction}`]);
            },
        },
    };
</script>

<style>
    .slider {
        height: 100px;
        background-color: #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        box-shadow: 0 0 1px #aaaaaa;
    }

    .broadcast-content {
        text-align: center;
    }

    .slider ol li::before {
        color: #ee711d !important;
    }

    .temp2 ol li::before {
        color: #0099cb;
    }
</style>