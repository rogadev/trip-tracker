<template>
    <div>
        <div class="left-container">
            <div>Duration</div>
            <div>{{ displayDuration }}</div>
        </div>
        <div class="right-container"></div>
    </div>
</template>

<script>
export default {
    data(){return{
        duration: 0
    }},
    computed: {
        displayDuration() {
            // take this.duration, do some math, output string
            return '0:01'
        }
    }
}
</script>