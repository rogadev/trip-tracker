<template>
    <div>
        <div class="map">
            map goes here
        </div>
        <trip-metrics></trip-metrics>
    </div>
</template>

<script>
import TripMetrics from '../components/TripMetrics.vue';

export default {
    components: {
        'trip-metrics': TripMetrics,
    }
}
</script>