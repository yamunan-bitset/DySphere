use gtk4::{gio, glib, prelude::*, subclass::prelude::*};
use gtk4::{Box, Button, Entry, Orientation, ScrolledWindow, TextView};

#[derive(Default)]
pub struct DyChatWidget {
    pub vbox: Box,
    pub scrolled_window: ScrolledWindow,
    pub text_view: TextView,
    pub hbox: Box,
    pub entry: Entry,
    pub send_button: Button,
}

#[glib::object_subclass]
impl ObjectSubclass for DyChatWidget {
    const NAME: &'static str = "DyChatWidget";
    type Type = super::DyChatWidget;
    type ParentType = gtk4::Widget;

    fn new() -> Self {
        Self {
            vbox: Box::new(Orientation::Vertical, 5),
            scrolled_window: ScrolledWindow::builder()
                .vexpand(true)
                .hscrollbar_policy(gtk4::PolicyType::Automatic)
                .vscrollbar_policy(gtk4::PolicyType::Automatic)
                .build(),
            text_view: TextView::builder()
                .editable(false)
                .wrap_mode(gtk4::WrapMode::Word)
                .build(),
            hbox: Box::new(Orientation::Horizontal, 5),
            entry: Entry::builder()
                .placeholder_text("Type your message here...")
                .hexpand(true)
                .build(),
            send_button: Button::with_label("Send"),
        }
    }
}

impl ObjectImpl for DyChatWidget {
    fn constructed(&self) {
        self.parent_constructed();

        self.text_view.set_top_margin(10);
        self.text_view.set_right_margin(10);
        self.text_view.set_left_margin(10);
        self.scrolled_window.set_child(Some(&self.text_view));

        self.hbox.append(&self.entry);
        self.hbox.append(&self.send_button);

        self.vbox.append(&self.scrolled_window);
        self.vbox.append(&self.hbox);

        self.set_child(Some(&self.vbox));
    }
}

impl WidgetImpl for DyChatWidget {}
