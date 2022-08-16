<template>
<div class="card card-body mt-4">
    <form  @submit.prevent="update">
        <div class="form-group">
            <label>Name</label>
            <input v-model="form.name" class="form-control" required/>
        </div>

        <div class="form-group mt-3">
            <label>Email</label>
            <input v-model="form.email" class="form-control" 
            type="email" required/>
        </div>

        <button type="submit" class="btn btn-success mt-3">Create User</button>
    </form>
</div>
</template>

<script>

import { getUser, updateUser } from '@/firebase';
import { computed, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter()
        const route = useRoute()
        const userId = computed(() => route.params.id)

        const form = reactive({name: '', email: ''})

        onMounted(async ()=> {
            const user = await getUser(userId.value)
            form.name = user.name,
            form.email = user.email

        })

        const update = async () => {
            await updateUser(userId.value, {...form})
            router.push('/')
            form.name ='',
            form.email = ''
        }
        return { form, update}
    }
}

</script>

<style>
</style>