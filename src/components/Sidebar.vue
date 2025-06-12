 <template>
    <aside :class="`${is_expanded ? 'is_expanded' :''}`">
        <div class="logo">
            <img src="../assets/lich.png" alt="Vue">
        </div> 

        <div class="menu-toggle-wrap">
            <buttom class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
            </buttom>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link class="buttom" to="/">
                <span class="material-symbols-outlined">home</span>
                <span class="text">Trang chủ</span>
            </router-link>
            <router-link class="buttom" to="/history">
                <span class="material-symbols-outlined">History</span>
                <span class="text">Lịch sử</span>
            </router-link>
            <router-link class="buttom" to="/event">
                <span class="material-symbols-outlined">Celebration</span>
                <span class="text">Sự kiện</span>
            </router-link>
            <router-link class="buttom" to="/About">
                <span class="material-symbols-outlined">Groups</span>
                <span class="text"> About</span>
            </router-link>
            <router-link class="buttom" to="/Weather">
                <span class="material-symbols-outlined">Cloud</span>
                <span class="text"> Thời tiết</span>
            </router-link>
           
        </div>
        <div class="flex"></div>
        <div class="menu">
            <router-link class="buttom" to="/setting">
                <span class="material-symbols-outlined">settings</span>
                <span class="text">setting</span>
            </router-link>
        </div>
        
    </aside>
 
</template>

<script setup>
import {ref} from'vue'
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}

</script>
<style lang="scss" scoped>
aside{
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 93vh;
    padding: 1rem;
    background-color: var(--dark);
    color: var(--light);
    transition: 0.2s ease-out;

    .flex{
        flex: 1 1 0;
    }
    .logo{
        margin-left: 5rem;
        margin-right: auto;

        img{
            width: 3rem;
        }
    }
    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle{
            transition: 0.2s ease-out;

            .material-symbols-outlined{
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
                cursor: pointer;
            }

            &:hover {
                .material-symbols-outlined {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3, .buttom .text{
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    h3{
        color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;

    }
    .menu{
        margin: 0 -1rem;

        .buttom{
            display: flex;
            align-items: center;
            text-decoration: none;
            cursor: pointer;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-symbols-outlined{
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            .text{
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover, &.router-link-exact-active {
                background-color: var(--dark-alt);

                .material-symbols-outlined, .text{
                    color: var(--primary);
                }

            }
            &.router-link-exact-active{
                border-right: 5px solid var(--primary);
            }
        }
    }
    &.is_expanded{
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
            .menu-toggle{
                transform: rotate(-180deg);
            }
        }
        h3, .buttom .text{
        opacity: 1;
       .buttom{
            .material-symbols-outlined{
            margin-right: 1rem;
        }
       }
    }
    }
    @media (max-width: 768px){
        position: fixed;
        z-index: 99;
    }
}
</style> 
