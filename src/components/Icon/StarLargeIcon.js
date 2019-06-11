import IconWrapper from './IconWrapper';

export default {
    name: 'StarLargeIcon',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.673 14.042l3.673-3.58-5.076-.738L12 5.125l-2.27 4.6-5.076.737 3.673 3.58-.867 5.055L12 16.711l4.54 2.386-.867-5.055zM12 19.04l-4.505 2.37a1.546 1.546 0 0 1-2.244-1.63l.86-5.017-3.644-3.553a1.546 1.546 0 0 1 .857-2.637l5.037-.732 2.252-4.564a1.546 1.546 0 0 1 2.774 0l2.252 4.564 5.037.732a1.546 1.546 0 0 1 .857 2.637l-3.645 3.553.86 5.016a1.546 1.546 0 0 1-2.243 1.63L12 19.04z" fill="currentColor"/></svg>' } });
    }
};
