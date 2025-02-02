use gtk4::prelude::*;
use gtk4::glib;
use gtk4::{Application, ApplicationWindow};
mod DyChatWidget;
use DyChatWidget::*; // Adjust the path according to your project structure

fn main() -> glib::ExitCode {
    // Create a new application with the builder pattern
    let app = Application::builder()
        .application_id("com.github.gtk-rs.examples.basic")
        .build();
    app.connect_activate(on_activate);
    // Run the application
    app.run()
}

fn on_activate(app: &Application) {
    // Create the main application window
    let window = ApplicationWindow::builder()
        .application(app)
        .title("Chat System")
        .default_width(400)
        .default_height(600)
        .build();

    let chat = DyChatWidget::default();
    window.set_child(Some(&chat));

    // Show the window
    window.show();
}
