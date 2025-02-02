mod imp;

use gtk4::glib;

glib::wrapper! {
    pub struct DyChatWidget(ObjectSubclass<imp::DyChatWidget>)
        @extends gtk4::Widget,
        @implements gtk4::Buildable, gtk4::ConstraintTarget;
}

impl DyChatWidget {
    pub fn new() -> Self {
        glib::Object::new(&[]).expect("Failed to create DyChatWidget")
    }
}

impl Default for DyChatWidget {
    fn default() -> Self {
        Self::new()
    }
}