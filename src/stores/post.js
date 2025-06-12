    import { ref, onMounted,reactive } from 'vue'
    import db  from '../firebase'; // Ensure this is correctly importing your initialized Firestore instance
    import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
    import { events,newEvents } from './counter';
    export const posts = ref([]);
    export const newPost = ref({
        title: '',
        startD: '',
        startM: '',
        endD: '',
        endM: '',
    });

    // Fetch posts on mount
    onMounted(async () => {
        await getPosts();
    });

    // Get posts function
    export const getPosts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'posts') );
            posts.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Error getting documents: ', error);
        }
    };

    // Add post function
        export const addPost = async () => {
            try {
                await addDoc(collection(db, 'posts'), newPost.value);
                newPost.value = { title: '',  startD: '', startM: '',endD: '',endM: '',};
                await getPosts();
              } catch (error) {
                console.error('Error adding document: ', error);
              }
        };

    // Update post function
    export const updatePost = async (post) => {
        // Hộp thoại prompt để nhập nội dung mới
        const updatedTitle = prompt('Enter new event name:', post.title);
        const updatedStartD = prompt('Enter new start day:', post.startD);
        const updatedStartM = prompt('Enter new start month:', post.startM);
        const updatedEndD = prompt('Enter new end day:', post.endD);
        const updatedEndM = prompt('Enter new end month:', post.endM);

        if (updatedTitle && updatedStartD && updatedStartM && updatedEndD && updatedEndM) {
            try {
                // Update dữ liệu trong Firestore
                await updateDoc(doc(db, 'posts', post.id), {
                    title: updatedTitle,
                    startD: updatedStartD,
                    startM: updatedStartM,
                    endD: updatedEndD,
                    endM: updatedEndM
                });

                // Cập nhật lại danh sách posts sau khi cập nhật thành công
                await getPosts();
            } catch (error) {
                console.error('Error updating document: ', error);
            }
        }
    };

    // Delete post function
    export const deletePost = async (id) => {
        try {
            await deleteDoc(doc(db, 'posts', id));
            await getPosts();
        } catch (error) {
            console.error('Error removing document: ', error);
        }
    };