imports.gi.versions.Gtk = "4.0";
// Imports gtk
const Gtk = imports.gi.Gtk;
const Pango = imports.gi.Pango;

let app = new Gtk.Application({ application_id: 'codes.gomes.gready' });

app.connect('activate', () => {
  let window = new Gtk.ApplicationWindow({
    application: app,
    title: "Fread",
    defaultHeight: 400,
    defaultWidth: 600
  });

  // let btn = new Gtk.Button({ label: 'Close dis' });
  // btn.connect('clicked', () => { win.close(); });
  
  let header = new Gtk.HeaderBar();
  let startButton = new Gtk.Button({ iconName: "media-playback-start-symbolic" });
  header.pack_start(startButton);
  
  window.set_titlebar(header);
  
  let text = new Gtk.Label();
  text.set_text("Example text");

  let textAttr = new Pango.AttrList();
  textAttr.insert(Pango.attr_scale_new(3));

  text.attributes = textAttr;
  
  window.set_child(text);
  window.present();
});

app.run([]);

gtk_label_set_markup (GTK_LABEL (label), "<small>Small text</small>");
